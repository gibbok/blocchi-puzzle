import { mkInitialState, gameSlice } from '~store';
import { InternalState, NO, ES } from '~game/types';
import { BOARD_HALF_S_Y } from '~utils';

const INITIAL_STATE = mkInitialState();
export const {
  actions: { moveDown, moveLeft, moveRight, moveUp, checkBoard },
  reducer
} = gameSlice;

describe('Move Up', () => {
  it('should rotate the tetro direction CW, no collision', () => {
    const initialState: InternalState = {
      ...INITIAL_STATE,
      currentTetro: { ...INITIAL_STATE.currentTetro, direction: NO }
    };
    const finalState: InternalState = {
      ...INITIAL_STATE,
      currentTetro: { ...INITIAL_STATE.currentTetro, direction: ES }
    };
    const r = reducer(initialState, moveUp);
    expect(r).toEqual(finalState);
  });

  it('should not be able to rotate, collision', () => {
    const initialState: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_Y,
      currentTetro: { ...INITIAL_STATE.currentTetro, direction: ES, x: 0, y: 5 }
    };
    const finalState: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_Y,
      currentTetro: { ...INITIAL_STATE.currentTetro, direction: ES, x: 0, y: 5 }
    };
    const r = reducer(initialState, moveUp);
    expect(r).toEqual(finalState);
  });
});
