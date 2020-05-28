import { mkInitialState, gameSliceXXX } from '../../../store';
import { InternalState, TetroEnum } from '../../../game/types';
import { BOARD_HALF_S_X, BOARD_HALF_S_X_REV } from '../../../utils';
import sinon from 'sinon';

const INITIAL_STATE = mkInitialState(TetroEnum.I, TetroEnum.J);

export const {
  actions: { moveDown, moveLeft, moveRight, moveUp, checkBoard },
  reducer,
} = gameSliceXXX;

const currentTetroStub = {
  ...INITIAL_STATE.currentTetro,
  type: TetroEnum.I,
  x: 1,
};
const nextTetroStub = {
  ...INITIAL_STATE.nextTetro,
  type: TetroEnum.L,
  x: 1,
};
const mkInitialStateStub = sinon.stub().returns({
  ...INITIAL_STATE,
  currentTetro: currentTetroStub,
  nextTetro: nextTetroStub,
});
const initialStateStub = mkInitialStateStub();

describe('Move Left', () => {
  it('should decrease current tetro x position, leaving the board un tocuched, no collission', () => {
    const initialState: InternalState = {
      ...initialStateStub,
      currentTetro: { ...initialStateStub.currentTetro },
    };
    const finalState: InternalState = {
      ...initialStateStub,
      currentTetro: { ...initialStateStub.currentTetro, x: 0 },
    };
    const r = reducer(initialState, moveLeft);
    expect(r).toEqual(finalState);
  });

  it('should decrease current tetro x position, leaving the board un touched, no collision', () => {
    const initialState: InternalState = {
      ...initialStateStub,
      board: BOARD_HALF_S_X,
      currentTetro: { ...initialStateStub.currentTetro },
    };
    const finalState: InternalState = {
      ...initialStateStub,
      board: BOARD_HALF_S_X,
      currentTetro: { ...initialStateStub.currentTetro, x: 0 },
    };
    const r = reducer(initialState, moveLeft);
    expect(r).toEqual(finalState);
  });

  it('should not decrease current tetro x position and kept it next to edge', () => {
    const initialState: InternalState = {
      ...initialStateStub,
      board: BOARD_HALF_S_X_REV,
      currentTetro: { ...initialStateStub.currentTetro, x: 5 },
    };
    const finalState: InternalState = {
      ...initialState,
      currentTetro: { ...initialStateStub.currentTetro, x: 5 },
    };
    const r = reducer(initialState, moveLeft);
    expect(r).toEqual(finalState);
  });

  it('should not decrease current tetro x position and leave it next to the edge', () => {
    const initialState: InternalState = {
      ...initialStateStub,
      board: BOARD_HALF_S_X_REV,
      currentTetro: { ...initialStateStub.currentTetro, x: 4 },
    };
    const finalState: InternalState = {
      ...initialState,
    };
    const r = reducer(initialState, moveLeft);
    expect(r).toEqual(finalState);
  });
});
