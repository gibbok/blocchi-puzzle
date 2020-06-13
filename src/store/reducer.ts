import { InternalState, DirectionEnum, PublicState, ScreenEnum, TetroEnum } from '../game/types';
import { Store } from 'redux';
import { configureStore, createSlice, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import {
  mkEmptyBoard,
  addTetroToBoard,
  setTetroPositionXCenterBoard,
  getRandomTetroEnum,
} from '../game';
import { BOARD_ROWS, BOARD_CELLS } from '../game/settings';
import {
  moveUp,
  moveRight,
  moveLeft,
  checkBoard,
  moveDown,
  screenGame,
  resetGame,
} from './board/actions';
import { gameOver } from './board/actions/gameOver';

export type AppThunk = ThunkAction<void, InternalState, null, Action<string>>;

/**
 * Make an initial state for the game.
 * @param current Current tetromino
 * @param next Next tetromino
 */
export const mkInitialState = (current: TetroEnum, next: TetroEnum): InternalState => {
  const type = current;
  return {
    board: mkEmptyBoard(BOARD_ROWS, BOARD_CELLS),
    score: 0,
    level: 1,
    lines: 0,
    currentTetro: {
      type,
      direction: DirectionEnum.N, // use default
      x: setTetroPositionXCenterBoard(BOARD_CELLS, type, DirectionEnum.N),
      y: 0,
    },
    nextTetro: {
      type: next,
      direction: DirectionEnum.N,
      x: setTetroPositionXCenterBoard(BOARD_CELLS, type, DirectionEnum.N),
      y: 0,
    },
    isPlay: true,
    isGameOver: false,
    screen: ScreenEnum.Intro,
  };
};

/**
 * Generates action creators and action types that correspond to the reducers and state (deterministic version).
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const gameSlicePure = (current: TetroEnum, next: TetroEnum) =>
  createSlice({
    name: 'game',
    initialState: mkInitialState(current, next),
    reducers: {
      screenGame,
      checkBoard,
      moveUp,
      moveLeft,
      moveRight,
      moveDown,
      gameOver,
      resetGame,
    },
  });

/**
 * Generates action creators and action types that correspond to the reducers and state (nondeterministic version).
 */
export const gameSlice = gameSlicePure(getRandomTetroEnum()(), getRandomTetroEnum()());

/**
 * Create a store.
 */
export const store: Store = configureStore({ reducer: gameSlice.reducer });

/**
 * Make public state based on private state.
 * @param state
 */
export const mkPublicState = (state: InternalState): PublicState => {
  const { board, currentTetro, score, level, lines, nextTetro, screen } = state;
  const { type, direction, x, y } = currentTetro;
  return {
    board: addTetroToBoard(type, direction, x, y, board),
    score,
    level,
    lines,
    nextTetro,
    screen,
  };
};
