import { mkInitialState, gameSlice } from '~store';
import { InternalState, TetroEnum, I, S } from '~game/types';
import { BOARD_HALF_S_Y, BOARD_ROW_EMPTY, logger } from '~utils';

const INITIAL_STATE = mkInitialState();
export const {
  actions: { moveDown, moveLeft, moveRight, moveUp, checkBoard },
  reducer
} = gameSlice;

describe('Move Down', () => {
  it('should increase current tetro y position, leaving the board un touched, no collision 1', () => {
    const test: InternalState = {
      ...INITIAL_STATE,
      currentTetro: { ...INITIAL_STATE.currentTetro, y: 1 }
    };
    const r = reducer(INITIAL_STATE, moveDown);
    expect(r).toEqual(test);
  });

  it('should increase current tetro y position, leaving the board un touched, no collision 2', () => {
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

  it('should not increase current tetro y position, lock current tetro on board, collision 3', () => {
    const initialStateStab: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_Y,
      currentTetro: { ...INITIAL_STATE.currentTetro, type: TetroEnum.I, x: 4, y: 3 },
      nextTetro: { ...INITIAL_STATE.nextTetro, type: TetroEnum.Z }
    };
    const finalState: InternalState = {
      ...INITIAL_STATE,
      board: [
        ...Array(2).fill(BOARD_ROW_EMPTY),
        ...Array(4).fill([0, 0, 0, 0, I, 0, 0, 0, 0, 0]),
        ...Array(14).fill(Array(10).fill(S))
      ],
      currentTetro: { ...INITIAL_STATE.currentTetro, type: TetroEnum.I },
      nextTetro: { ...INITIAL_STATE.nextTetro, type: TetroEnum.Z }
    };
    const reducerStab = {
      ...reducer(initialStateStab, moveDown),
      currentTetro: { ...INITIAL_STATE.currentTetro, type: TetroEnum.I },
      nextTetro: { ...INITIAL_STATE.nextTetro, type: TetroEnum.Z }
    };
    expect(reducerStab).toEqual(finalState);
  });
});
