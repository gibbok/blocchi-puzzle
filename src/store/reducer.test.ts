import { BOARD_ROW_EMPTY } from '../utils';
import { mkInitialState, mkPublicState, gameSlice } from '.';
import { I, PubicState, TetroEnum } from '../game/types';
import * as sinon from 'sinon';

export const {
  actions: { moveDown, moveLeft, moveRight, moveUp, checkBoard },
  reducer
} = gameSlice;

const INITIAL_STATE = mkInitialState();
const INVALID_ACTION = { type: 'invalid-action' };

const currentTetroStub = {
  ...INITIAL_STATE.currentTetro,
  type: TetroEnum.I
};
const nextTetroStub = {
  ...INITIAL_STATE.nextTetro,
  type: TetroEnum.S
};
const mkInitialStateStub = sinon.stub().returns({
  ...INITIAL_STATE,
  currentTetro: currentTetroStub,
  nextTetro: nextTetroStub
});

const initialStateStub = mkInitialStateStub();
describe('reducer', () => {
  describe('reducer', () => {
    it('should return default state if no state is passed', () => {
      const reducerStub = sinon.stub().returns({
        ...reducer(undefined, INVALID_ACTION),
        currentTetro: currentTetroStub,
        nextTetro: nextTetroStub
      });
      const r = reducerStub(undefined, INVALID_ACTION);
      expect(r).toEqual(initialStateStub);
    });

    it('should return prevState if action passed is not valid', () => {
      const r = reducer(INITIAL_STATE, INVALID_ACTION);
      expect(r).toEqual(INITIAL_STATE);
    });

    describe('mkPublicState', () => {
      it('should return the pubic state included computed board to render and removed hidden properties', () => {
        const board = [
          ...Array(4).fill([0, 0, 0, 0, I, 0, 0, 0, 0, 0]),
          ...Array(16).fill(BOARD_ROW_EMPTY)
        ];
        const { score, level, lines, nextTetro, screen } = initialStateStub;
        const output: PubicState = { board, score, level, lines, nextTetro, screen };
        const mkPublicStateStub = {
          ...mkPublicState(initialStateStub),
          nextTetro
        };
        expect(mkPublicStateStub).toEqual(output);
      });
    });
  });
});
