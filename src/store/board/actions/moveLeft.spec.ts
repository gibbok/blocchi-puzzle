import { mkInitialState, gameSlice } from '~store';
import { InternalState, I, S } from '~game/types';
import { BOARD_HALF_S_X, BOARD_HALF_S_X_REV } from '~utils';

const INITIAL_STATE = mkInitialState();
export const {
  actions: { moveDown, moveLeft, moveRight, moveUp, checkBoard },
  reducer
} = gameSlice;

describe.skip('Move Left', () => {
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

  it('should not decrease current tetro x position, lock current tetro on board, collision ', () => {
    const initialState: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_X_REV,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 5 }
    };
    const finalState: InternalState = {
      ...INITIAL_STATE,
      board: [
        ...Array(4).fill([...Array(5).fill(S), I, ...Array(4).fill(0)]),
        ...Array(16).fill([...Array(5).fill(S), ...Array(5).fill(0)])
      ],
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 5 }
    };
    const r = reducer(initialState, moveLeft);
    expect(r).toEqual(finalState);
  });
});
