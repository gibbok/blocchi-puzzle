import { mkInitialState, gameSlice } from '~store';
import { InternalState, ES } from '~game/types';
import { BOARD_HALF_S_Y, BOARD_EMPTY } from '~utils';

const INITIAL_STATE = mkInitialState();
export const {
  actions: { moveDown, moveLeft, moveRight, moveUp, checkBoard },
  reducer
} = gameSlice;

describe('CheckBoard', () => {
  it('should update level, lines, score when row completed are detected on the board', () => {
    const initialState: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_Y,
      currentTetro: { ...INITIAL_STATE.currentTetro, direction: ES, x: 0, y: 5 }
    };
    const finalState: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_EMPTY,
      currentTetro: { ...INITIAL_STATE.currentTetro, direction: ES, x: 0, y: 5 },
      level: 3,
      lines: 14,
      score: 1400
    };
    const r = reducer(initialState, checkBoard);
    expect(r).toEqual(finalState);
  });

  it('should not update level, lines, score when no row completed are detected', () => {
    const initialState: InternalState = { ...INITIAL_STATE };
    const finalState: InternalState = { ...INITIAL_STATE };
    const r = reducer(initialState, checkBoard);
    expect(r).toEqual(finalState);
  });
});
