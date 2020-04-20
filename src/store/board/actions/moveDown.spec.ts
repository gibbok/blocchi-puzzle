import { mkInitialState, gameSlice } from '~store';
import { InternalState, TetroEnum, I, S } from '~game/types';
import { BOARD_HALF_S_Y, BOARD_ROW_EMPTY } from '~utils';

const INITIAL_STATE = mkInitialState();
export const {
  actions: { moveDown, moveLeft, moveRight, moveUp, checkBoard },
  reducer
} = gameSlice;

describe('Move Down', () => {
  it('should increase current tetro y position, leaving the board un touched, no collision 1', () => {
    const initialStateStab = {
      ...INITIAL_STATE,
      currentTetro: { ...INITIAL_STATE.currentTetro, type: TetroEnum.I, x: 4, y: 0 },
      nextTetro: { ...INITIAL_STATE.nextTetro, type: TetroEnum.L, x: 4 }
    };
    const testStab: InternalState = {
      ...INITIAL_STATE,
      currentTetro: { ...INITIAL_STATE.currentTetro, type: TetroEnum.I, x: 4, y: 1 },
      nextTetro: { ...INITIAL_STATE.nextTetro, type: TetroEnum.L, x: 4 }
    };
    const r = reducer(initialStateStab, moveDown);
    expect(r).toEqual(testStab);
  });

  it('should increase current tetro y position, leaving the board un touched, no collision 2', () => {
    const initialStateStab: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_Y,
      currentTetro: { ...INITIAL_STATE.currentTetro, type: TetroEnum.L, x: 3, y: 1 },
      nextTetro: { ...INITIAL_STATE.nextTetro, type: TetroEnum.L, x: 3, y: 0 }
    };
    const finalStateStab: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_Y,
      currentTetro: { ...INITIAL_STATE.currentTetro, type: TetroEnum.L, x: 3, y: 2 },
      nextTetro: { ...INITIAL_STATE.nextTetro, type: TetroEnum.L, x: 4, y: 0 }
    };
    const r = reducer(initialStateStab, moveDown);
    expect(r).toEqual(finalStateStab);
  });

  it('should not increase current tetro y position, lock current tetro on board, collision 3', () => {
    const initialStateStab: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_Y,
      currentTetro: { ...INITIAL_STATE.currentTetro, type: TetroEnum.I, x: 4, y: 3 },
      nextTetro: { ...INITIAL_STATE.nextTetro, type: TetroEnum.Z, x: 4 }
    };
    const finalState: InternalState = {
      ...INITIAL_STATE,
      board: [
        ...Array(2).fill(BOARD_ROW_EMPTY),
        ...Array(4).fill([0, 0, 0, 0, I, 0, 0, 0, 0, 0]),
        ...Array(14).fill(Array(10).fill(S))
      ],
      currentTetro: { ...INITIAL_STATE.currentTetro, type: TetroEnum.I },
      nextTetro: { ...INITIAL_STATE.nextTetro, type: TetroEnum.Z, x: 4 }
    };
    const reducerStab = {
      ...reducer(initialStateStab, moveDown),
      currentTetro: { ...INITIAL_STATE.currentTetro, type: TetroEnum.I },
      nextTetro: { ...INITIAL_STATE.nextTetro, type: TetroEnum.Z }
    };
    expect(reducerStab).toEqual(finalState);
  });
});
