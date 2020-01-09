import { InternalState, TetroEnum, DirectionEnum, PubicState } from '~game/types';
import { Store } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { mkEmptyBoard, addTetroToBoard } from '~game';
import { BOARD_ROWS, BOARD_CELLS } from '../game/settings';
import { moveUp, moveDown, moveRight, moveLeft, checkBoard } from './board/actions';

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

export const gameSlice = createSlice({
  name: 'game',
  initialState: mkInitialState(),
  reducers: {
    checkBoard: checkBoard,
    moveUp: moveUp,
    moveLeft: moveLeft,
    moveRight: moveRight,
    moveDown: moveDown
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
