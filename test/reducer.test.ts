import { reducer, mkInitialState } from '../src/reducer';
import { InternalState, I, S } from '../src/types';
import { MoveDown } from '../src/action';
import { BOARD_HALF_S, BOARD_ROW_EMPTY } from './data.support.test';

const INITIAL_STATE = mkInitialState();

describe('reducer', () => {
  describe('reducer', () => {
    it('should increase current tetro y position, leaving the board un touched, no collision', () => {
      const test: InternalState = {
        ...INITIAL_STATE,
        currentTetro: { ...INITIAL_STATE.currentTetro, y: 1 }
      };
      const r = reducer(INITIAL_STATE, MoveDown);
      expect(r).toEqual(test);
    });

    it('should increase current tetro y position, leaving the board un touched, no collision', () => {
      const initialState: InternalState = {
        ...INITIAL_STATE,
        board: BOARD_HALF_S,
        currentTetro: { ...INITIAL_STATE.currentTetro, y: 1 }
      };
      const finalState: InternalState = {
        ...INITIAL_STATE,
        board: BOARD_HALF_S,
        currentTetro: { ...INITIAL_STATE.currentTetro, y: 2 }
      };
      const r = reducer(initialState, MoveDown);
      expect(r).toEqual(finalState);
    });

    it('should not increase current tetro y position, lock current tetro on board, collision ', () => {
      const initialState: InternalState = {
        ...INITIAL_STATE,
        board: BOARD_HALF_S,
        currentTetro: { ...INITIAL_STATE.currentTetro, y: 4 }
      };
      const finalState: InternalState = {
        ...INITIAL_STATE,
        board: [
          ...Array(2).fill(BOARD_ROW_EMPTY),
          ...Array(4).fill([I, ...Array(9).fill(0)]),
          ...Array(14).fill(Array(10).fill(S))
        ],
        currentTetro: { ...INITIAL_STATE.currentTetro, y: 2 }
      };
      const r = reducer(initialState, MoveDown);
      expect(r).toEqual(finalState);
    });
  });
});
