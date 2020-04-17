import { InternalState, TetroEnum, DirectionEnum, PubicState, ScreenEnum } from '~game/types';
import { Store } from 'redux';
import { configureStore, createSlice, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { mkEmptyBoard, addTetroToBoard, getRandomTetroEnum } from '~game';
import { BOARD_ROWS, BOARD_CELLS } from '../game/settings';
import { moveUp, moveRight, moveLeft, checkBoard, moveDown, screenGame } from './board/actions';
import { gameOver } from './board/actions/gameOver';
export type AppThunk = ThunkAction<void, InternalState, null, Action<string>>;

export const mkInitialState = () => ({
  board: mkEmptyBoard(BOARD_ROWS, BOARD_CELLS),
  score: 0,
  level: 1,
  lines: 0,
  currentTetro: {
    type: getRandomTetroEnum()(),
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
  isPlay: true, // TODO pause before start game
  isGameOver: false,
  screen: ScreenEnum.Intro
});

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
    gameOver
  }
});

export const store: Store = configureStore({ reducer: gameSlice.reducer });
// TODO rename this file to gameSlice or smt, use slice in the title

export const mkPublicState = (state: InternalState): PubicState => {
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
