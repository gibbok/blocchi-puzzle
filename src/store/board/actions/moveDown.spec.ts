import { mkInitialState, gameSliceXXX } from '../../../store';
import { InternalState, TetroEnum, I, S } from '../../../game/types';
import { BOARD_HALF_S_Y, BOARD_ROW_EMPTY } from '../../../utils';
import sinon from 'sinon';

const INITIAL_STATE = mkInitialState(TetroEnum.I, TetroEnum.J);

export const {
  actions: { moveDown, moveLeft, moveRight, moveUp, checkBoard },
  reducer,
} = gameSliceXXX;

const currentTetroStub = {
  ...INITIAL_STATE.currentTetro,
  type: TetroEnum.I,
  x: 4,
};
const nextTetroStub = {
  ...INITIAL_STATE.nextTetro,
  type: TetroEnum.L,
  x: 4,
};
const mkInitialStateStub = sinon.stub().returns({
  ...INITIAL_STATE,
  currentTetro: currentTetroStub,
  nextTetro: nextTetroStub,
});
const initialStateStub = mkInitialStateStub();

describe('Move Down', () => {
  it('should increase current tetro y position, leaving the board un touched, no collision 1', () => {
    const initialStateStab = {
      ...initialStateStub,
      currentTetro: { ...initialStateStub.currentTetro, y: 0 },
    };
    const testStab: InternalState = {
      ...initialStateStub,
      currentTetro: { ...initialStateStub.currentTetro, y: 1 },
    };
    const r = reducer(initialStateStab, moveDown);
    expect(r).toEqual(testStab);
  });

  it('should increase current tetro y position, leaving the board un touched, no collision 2', () => {
    const initialStateStab: InternalState = {
      ...initialStateStub,
      board: BOARD_HALF_S_Y,
      currentTetro: { ...initialStateStub.currentTetro, y: 1 },
    };
    const finalStateStab: InternalState = {
      ...initialStateStub,
      board: BOARD_HALF_S_Y,
      currentTetro: { ...initialStateStub.currentTetro, y: 2 },
    };
    const r = reducer(initialStateStab, moveDown);
    expect(r).toEqual(finalStateStab);
  });

  it('should not increase current tetro y position, lock current tetro on board, collision 3', () => {
    const initialStateStab: InternalState = {
      ...initialStateStub,
      board: BOARD_HALF_S_Y,
      currentTetro: { ...initialStateStub.currentTetro, y: 3 },
    };
    const finalState: InternalState = {
      ...initialStateStub,
      board: [
        ...Array(2).fill(BOARD_ROW_EMPTY),
        ...Array(4).fill([0, 0, 0, 0, I, 0, 0, 0, 0, 0]),
        ...Array(14).fill(Array(10).fill(S)),
      ],
      currentTetro: { ...initialStateStub.currentTetro },
    };
    const reducerStab = {
      ...reducer(initialStateStab, moveDown),
      currentTetro: { ...initialStateStub.currentTetro },
      nextTetro: { ...initialStateStub.nextTetro },
    };
    expect(reducerStab).toEqual(finalState);
  });
});
