import { mkInitialState, gameSliceXXX } from '../../../store';
import { InternalState, NO, ES, TetroEnum } from '../../../game/types';
import { BOARD_HALF_S_Y } from '../../../utils';
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

describe('Move Up', () => {
  it('should rotate the tetro direction CW, no collision', () => {
    const initialState: InternalState = {
      ...initialStateStub,
      currentTetro: { ...initialStateStub.currentTetro, direction: NO },
    };
    const finalState: InternalState = {
      ...initialStateStub,
      currentTetro: { ...initialStateStub.currentTetro, direction: ES },
    };
    const r = reducer(initialState, moveUp);
    expect(r).toEqual(finalState);
  });

  it('should not be able to rotate, collision', () => {
    const initialState: InternalState = {
      ...initialStateStub,
      board: BOARD_HALF_S_Y,
      currentTetro: { ...initialStateStub.currentTetro, direction: ES, x: 0, y: 5 },
    };
    const finalState: InternalState = {
      ...initialStateStub,
      board: BOARD_HALF_S_Y,
      currentTetro: { ...initialStateStub.currentTetro, direction: ES, x: 0, y: 5 },
    };
    const r = reducer(initialState, moveUp);
    expect(r).toEqual(finalState);
  });
});
