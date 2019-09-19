import { reducer, mkInitialState } from '../src/reducer';
import { InternalState, I } from '../src/types';
import { MoveDown } from '../src/action';
import { BOARD_ROW_EMPTY, BOARD_FULL_S } from './data.support.test';

const INTERNAL_STATE = mkInitialState();
describe('reducer', () => {
  describe.only('reducer', () => {
    it('should return new internal state with tetro moved down of one position', () => {
      const test: InternalState = {
        ...INTERNAL_STATE,
        board: [
          BOARD_ROW_EMPTY,
          ...Array(4).fill([0, I, 0, 0, 0, 0, 0, 0, 0, 0]),
          ...Array(15).fill(BOARD_ROW_EMPTY)
        ],
        currentTetro: {
          ...INTERNAL_STATE.currentTetro,
          x: 1,
          y: 1
        }
      };
      const r = reducer(INTERNAL_STATE, MoveDown);
      expect(r).toEqual(test);
    });

    it('should return new internal state with no tetro moved down', () => {
      const test: InternalState = {
        ...INTERNAL_STATE,
        board: BOARD_FULL_S
      };
      const r = reducer(test, MoveDown);
      expect(r).toEqual(test);
    });
  });
});
