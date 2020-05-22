import { InternalState, DirectionEnum, PublicState, ScreenEnum } from '../game/types';
import { Store } from 'redux';
import { configureStore, createSlice, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import {
  mkEmptyBoard,
  addTetroToBoard,
  getRandomTetroEnum,
  setTetroPositionXCenterBoard
} from '../game';
import { BOARD_ROWS, BOARD_CELLS } from '../game/settings';
import {
  moveUp,
  moveRight,
  moveLeft,
  checkBoard,
  moveDown,
  screenGame,
  resetGame
} from './board/actions';
import { gameOver } from './board/actions/gameOver';
export type AppThunk = ThunkAction<void, InternalState, null, Action<string>>;

export const mkInitialState = () => {
  const type = getRandomTetroEnum()();
  return {
    board: mkEmptyBoard(BOARD_ROWS, BOARD_CELLS),
    score: 0,
    level: 1,
    lines: 0,
    currentTetro: {
      type,
      direction: DirectionEnum.N, // use default
      x: setTetroPositionXCenterBoard(BOARD_CELLS, type, DirectionEnum.N),
      y: 0
    },
    nextTetro: {
      type: getRandomTetroEnum()(),
      direction: DirectionEnum.N,
      x: setTetroPositionXCenterBoard(BOARD_CELLS, type, DirectionEnum.N),
      y: 0
    },
    isPlay: true, // TODO pause before start game
    isGameOver: false,
    screen: ScreenEnum.Intro
  };
};

export const gameSlice = createSlice({
  name: 'game',
  initialState: mkInitialState(),
  reducers: {
    screenGame,
    checkBoard,
    moveUp,
    moveLeft,
    moveRight,
    moveDown,
    gameOver,
    resetGame
  }
});

export const store: Store = configureStore({ reducer: gameSlice.reducer });
// TODO rename this file to gameSlice or smt, use slice in the title

export const mkPublicState = (state: InternalState): PublicState => {
  const { board, currentTetro, score, level, lines, nextTetro, screen } = state;
  const { type, direction, x, y } = currentTetro;
  return {
    board: addTetroToBoard(type, direction, x, y, board),
    score,
    level,
    lines,
    nextTetro,
    screen
  };
};
