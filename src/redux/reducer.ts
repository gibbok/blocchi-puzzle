import { InternalState, TetroEnum, DirectionEnum, PubicState } from '../game';
import { Store } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

import {
  mkEmptyBoard,
  addTetroToBoard,
  recFindAvailablePosY,
  recFindAvailablePosX,
  detectAndRemoveCompletedRows,
  getCompleteRowIdxs
} from '../game/board';
import { occupied, rotateTetroDirectionACW } from '../game/tetromino';
import { pipe } from 'fp-ts/lib/pipeable';
import { calcLevel, calcScore } from '../game/game';
import { BOARD_ROWS, BOARD_CELLS } from '../game/settings';

export const mkInitialState = () => ({
  board: mkEmptyBoard(BOARD_ROWS, BOARD_CELLS),
  score: 0,
  level: 1,
  lines: 0,
  currentTetro: {
    type: TetroEnum.I, // TODO random
    direction: DirectionEnum.N, // TODO random
    x: 0,
    y: 0
  },
  nextTetro: {
    type: TetroEnum.S, // TODO random
    direction: DirectionEnum.N, // TODO randome
    x: 0,
    y: 0
  },
  isPlay: true // TODO pause before start game
});

const logicMoveDown = (prevState: InternalState) => {
  const {
    board,
    score,
    level,
    lines,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay
  } = prevState;
  const newY = y + 1;
  const isOccupiedDown = occupied(type, direction, x, newY, board);
  const foundPosY = recFindAvailablePosY(type, direction, x, newY, board, 1);
  const newState = {
    board: isOccupiedDown ? addTetroToBoard(type, direction, x, foundPosY, board) : board,
    score,
    level,
    lines,
    currentTetro: {
      type,
      direction,
      x,
      y: isOccupiedDown ? foundPosY : newY
    },
    nextTetro,
    isPlay
  };
  console.log(newState);
  return newState;
};

const logicMoveRight = (prevState: InternalState) => {
  const {
    board,
    score,
    level,
    lines,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay
  } = prevState;
  const newRightX = x + 1;
  const isOccupiedRight = occupied(type, direction, newRightX, y, board);
  const foundRightPosX = recFindAvailablePosX(type, direction, newRightX, y, board, 1);

  return {
    board: isOccupiedRight ? addTetroToBoard(type, direction, foundRightPosX, y, board) : board,
    score,
    level,
    lines,
    currentTetro: {
      type,
      direction,
      x: isOccupiedRight ? foundRightPosX : newRightX,
      y
    },
    nextTetro,
    isPlay
  };
};

const logicMoveUp = (prevState: InternalState) => {
  const {
    board,
    score,
    level,
    lines,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay
  } = prevState;
  const directionNew = rotateTetroDirectionACW(direction);
  const isOccupiedUp = occupied(type, directionNew, x, y, board);
  return {
    board,
    score,
    level,
    lines,
    currentTetro: {
      type,
      direction: isOccupiedUp ? direction : directionNew,
      x,
      y
    },
    nextTetro,
    isPlay
  };
};

const logicMoveLeft = (prevState: InternalState) => {
  const {
    board,
    score,
    level,
    lines,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay
  } = prevState;
  const newLeftX = x - 1;
  const isOccupiedLeft = occupied(type, direction, newLeftX, y, board);
  const foundLeftPosX = recFindAvailablePosX(type, direction, newLeftX, y, board, -1);
  return {
    board: isOccupiedLeft ? addTetroToBoard(type, direction, foundLeftPosX, y, board) : board,
    score,
    level,
    lines,
    currentTetro: {
      type,
      direction,
      x: isOccupiedLeft ? foundLeftPosX : newLeftX,
      y
    },
    nextTetro,
    isPlay
  };
};

const logicCheckBoard = (prevState: InternalState) => {
  const {
    board,
    lines,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay
  } = prevState;
  const totRowCompleted = getCompleteRowIdxs(board);
  const totRowCompletedLen = totRowCompleted.length;
  const newScore = pipe(totRowCompletedLen, calcScore);
  return {
    board: detectAndRemoveCompletedRows(board),
    score: newScore,
    level: calcLevel(newScore),
    lines: lines + totRowCompletedLen,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay
  };
};

export const gameSlice = createSlice({
  name: 'game',
  initialState: mkInitialState(),
  reducers: {
    checkBoard: logicCheckBoard,
    moveUp: logicMoveUp,
    moveLeft: logicMoveLeft,
    moveRight: logicMoveRight,
    moveDown: logicMoveDown
  }
});

export const store: Store = configureStore({ reducer: gameSlice.reducer });
// TODO rename this file to gameSlice or smt, use slice in the title

export const mkPublicState = (state: InternalState): PubicState => {
  const { board, currentTetro, score, level, lines, nextTetro } = state;
  const { type, direction, x, y } = currentTetro;
  return {
    board: addTetroToBoard(type, direction, x, y, board),
    score,
    level,
    lines,
    nextTetro
  };
};
