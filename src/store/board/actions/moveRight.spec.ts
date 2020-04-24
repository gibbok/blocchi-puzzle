import { mkInitialState, gameSlice } from '~store';
import { InternalState, TetroEnum } from '~game/types';
import { BOARD_HALF_S_X } from '~utils';
import sinon from 'sinon';

const INITIAL_STATE = mkInitialState();

export const {
  actions: { moveDown, moveLeft, moveRight, moveUp, checkBoard },
  reducer
} = gameSlice;

const currentTetroStub = {
  ...INITIAL_STATE.currentTetro,
  type: TetroEnum.I,
  x: 1
};
const nextTetroStub = {
  ...INITIAL_STATE.nextTetro,
  type: TetroEnum.L,
  x: 1
};
const mkInitialStateStub = sinon.stub().returns({
  ...INITIAL_STATE,
  currentTetro: currentTetroStub,
  nextTetro: nextTetroStub
});
const initialStateStub = mkInitialStateStub();

describe('Move Right', () => {
  it('should increase current tetro x position, leaving the board un touched, no collission', () => {
    const inputStab = {
      ...initialStateStub,
      currentTetro: { ...initialStateStub.currentTetro }
    };

    const testStab: InternalState = {
      ...initialStateStub,
      currentTetro: { ...initialStateStub.currentTetro, x: 2 }
    };
    const r = reducer(inputStab, moveRight);
    expect(r).toEqual(testStab);
  });

  it('should not push current tetro x position over the edge, leaving the board un touched, no collission', () => {
    const initialState: InternalState = {
      ...initialStateStub,
      currentTetro: { ...initialStateStub.currentTetro, x: 6 }
    };
    const finalState: InternalState = {
      ...initialStateStub,
      currentTetro: { ...initialStateStub.currentTetro, x: 7 }
    };
    const r = reducer(initialState, moveRight);
    expect(r).toEqual(finalState);
  });

  it('should increase current tetro x position, leaving the board un touched, no collision', () => {
    const initialState: InternalState = {
      ...initialStateStub,
      board: BOARD_HALF_S_X,
      currentTetro: { ...initialStateStub.currentTetro }
    };
    const finalState: InternalState = {
      ...initialStateStub,
      board: BOARD_HALF_S_X,
      currentTetro: { ...initialStateStub.currentTetro, x: 2 }
    };
    const r = reducer(initialState, moveRight);
    expect(r).toEqual(finalState);
  });

  it('should not increase current tetro x position, leave it on the edge', () => {
    const initialState: InternalState = {
      ...initialStateStub,
      board: BOARD_HALF_S_X,
      currentTetro: { ...initialStateStub.currentTetro, x: 4 }
    };
    const finalState: InternalState = {
      ...initialState
    };
    const r = reducer(initialState, moveRight);
    expect(r).toEqual(finalState);
  });
});
