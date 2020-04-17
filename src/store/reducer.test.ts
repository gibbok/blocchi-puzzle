import { BOARD_ROW_EMPTY } from '../utils';
import { mkInitialState, mkPublicState, gameSlice } from '.';
import { InternalState, I, PubicState } from '../game/types';
export const {
  actions: { moveDown, moveLeft, moveRight, moveUp, checkBoard },
  reducer
} = gameSlice;

const INITIAL_STATE = mkInitialState();
const INVALID_ACTION = { type: 'invalid-action' };

describe('reducer', () => {
  describe('reducer', () => {
    it('should return default state if no state is passed', () => {
      const r = reducer(undefined, INVALID_ACTION);
      expect(r).toEqual(INITIAL_STATE);
    });

    it('should return prevState if action passed is not valid', () => {
      const r = reducer(INITIAL_STATE, INVALID_ACTION);
      expect(r).toEqual(INITIAL_STATE);
    });

    describe('mkPublicState', () => {
      it('should return the pubic state included computed board to render and removed hidden properties', () => {
        const input: InternalState = INITIAL_STATE;
        const { score, level, lines, nextTetro, screen } = INITIAL_STATE;
        const board = [
          ...Array(4).fill([I, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          ...Array(16).fill(BOARD_ROW_EMPTY)
        ];
        const output: PubicState = { board, score, level, lines, nextTetro, screen };
        expect(mkPublicState(input)).toEqual(output);
      });
    });
  });
});
