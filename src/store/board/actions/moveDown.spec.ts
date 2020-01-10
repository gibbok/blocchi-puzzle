import { mkInitialState, gameSlice } from '~store';
import { InternalState, TetroEnum, I, S } from '~game/types';
import { BOARD_HALF_S_Y, BOARD_ROW_EMPTY } from '~utils';

const INITIAL_STATE = mkInitialState();
export const {
  actions: { moveDown, moveLeft, moveRight, moveUp, checkBoard },
  reducer
} = gameSlice;

describe('Move Down', () => {
  it('should increase current tetro y position, leaving the board un touched, no collision', () => {
    const test: InternalState = {
      ...INITIAL_STATE,
      currentTetro: { ...INITIAL_STATE.currentTetro, y: 1 }
    };
    const r = reducer(INITIAL_STATE, moveDown);
    expect(r).toEqual(test);
  });

  it('should increase current tetro y position, leaving the board un touched, no collision', () => {
    const initialState: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_Y,
      currentTetro: { ...INITIAL_STATE.currentTetro, type: TetroEnum.L, y: 1 }
    };
    const finalState: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_Y,
      currentTetro: { ...INITIAL_STATE.currentTetro, type: TetroEnum.L, y: 2 }
    };
    const r = reducer(initialState, moveDown);
    expect(r).toEqual(finalState);
  });

  it('should not increase current tetro y position, lock current tetro on board, collision ', () => {
    const initialState: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_Y,
      currentTetro: { ...INITIAL_STATE.currentTetro, y: 3 }
    };
    const finalState: InternalState = {
      ...INITIAL_STATE,
      board: [
        ...Array(2).fill(BOARD_ROW_EMPTY),
        ...Array(4).fill([0, I, ...Array(8).fill(0)]),
        ...Array(14).fill(Array(10).fill(S))
      ],
      currentTetro: { ...INITIAL_STATE.currentTetro, type: TetroEnum.L }
    };
    const r = reducer(initialState, moveDown);
    expect(r).toEqual(finalState);
  });
});
