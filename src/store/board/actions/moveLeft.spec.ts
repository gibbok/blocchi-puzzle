import { mkInitialState, gameSlice } from '~store';
import { InternalState } from '~game/types';
import { BOARD_HALF_S_X, BOARD_HALF_S_X_REV } from '~utils';

const INITIAL_STATE = mkInitialState();
export const {
  actions: { moveDown, moveLeft, moveRight, moveUp, checkBoard },
  reducer
} = gameSlice;

describe('Move Left', () => {
  it('should decrease current tetro x position, leaving the board un tocuched, no collission', () => {
    const initialState: InternalState = {
      ...INITIAL_STATE,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 1 }
    };
    const finalState: InternalState = {
      ...INITIAL_STATE,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 0 }
    };
    const r = reducer(initialState, moveLeft);
    expect(r).toEqual(finalState);
  });

  it('should decrease current tetro x position, leaving the board un touched, no collision', () => {
    const initialState: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_X,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 1 }
    };
    const finalState: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_X,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 0 }
    };
    const r = reducer(initialState, moveLeft);
    expect(r).toEqual(finalState);
  });

  it('should not decrease current tetro x position and kept it next to edge', () => {
    const initialState: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_X_REV,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 5 }
    };
    const finalState: InternalState = {
      ...initialState,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 5 }
    };
    const r = reducer(initialState, moveLeft);
    expect(r).toEqual(finalState);
  });
  it('should not decrease current tetro x position and leave it next to the edge', () => {
    const initialState: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_X_REV,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 4 }
    };
    const finalState: InternalState = {
      ...initialState
    };
    const r = reducer(initialState, moveLeft);
    expect(r).toEqual(finalState);
  });
});
