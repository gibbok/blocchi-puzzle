import { BOARD_ROW_EMPTY } from '../utils';
import { mkInitialState, mkPublicState, gameSlice } from '.';
import { InternalState, I, PubicState, TetroEnum } from '../game/types';
import * as sinon from 'sinon';

export const {
  actions: { moveDown, moveLeft, moveRight, moveUp, checkBoard },
  reducer
} = gameSlice;

const INITIAL_STATE = mkInitialState();
const INVALID_ACTION = { type: 'invalid-action' };

describe('reducer', () => {
  describe('reducer', () => {
    it('should return default state if no state is passed', () => {
      const currentTetro = {
        ...INITIAL_STATE.currentTetro,
        type: TetroEnum.I
      };
      const nextTetro = {
        ...INITIAL_STATE.nextTetro,
        type: TetroEnum.S
      };
      const mkInitialStateStub = sinon.stub().returns({
        ...INITIAL_STATE,
        currentTetro,
        nextTetro
      });
      const initialStateStub = mkInitialStateStub();
      const reducerStub = sinon.stub().returns({
        ...reducer(undefined, INVALID_ACTION),
        currentTetro,
        nextTetro
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
        const input: InternalState = {
          ...INITIAL_STATE,
          currentTetro: { ...INITIAL_STATE.currentTetro, type: TetroEnum.I }
        };

        const board = [
          ...Array(4).fill([I, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          ...Array(16).fill(BOARD_ROW_EMPTY)
        ];
        const { score, level, lines, nextTetro, screen } = input;

        const output: PubicState = { board, score, level, lines, nextTetro, screen };
        const mkPublicStateStub = {
          ...mkPublicState(input),
          nextTetro: { ...input.nextTetro }
        };
        expect(mkPublicStateStub).toEqual(output);
      });
    });
  });
});
