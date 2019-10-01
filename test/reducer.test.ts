import { reducer, mkInitialState } from '../src/reducer';
import { InternalState, I, S } from '../src/types';
import { MoveDown, MoveRight, MoveLeft } from '../src/action';
import {
  BOARD_HALF_S_Y,
  BOARD_ROW_EMPTY,
  BOARD_HALF_S_X,
  BOARD_HALF_S_X_REV
} from './data.support.test';

const INITIAL_STATE = mkInitialState();

describe('reducer', () => {
  describe('reducer', () => {
    describe('No Move', () => {
      it('should return prevState if action passed is not valid ', () => {
        const r = reducer(INITIAL_STATE, { type: 'invalid-action' });
        expect(r).toEqual(INITIAL_STATE);
      });
    });
    describe('Move Down', () => {
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
          board: BOARD_HALF_S_Y,
          currentTetro: { ...INITIAL_STATE.currentTetro, y: 1 }
        };
        const finalState: InternalState = {
          ...INITIAL_STATE,
          board: BOARD_HALF_S_Y,
          currentTetro: { ...INITIAL_STATE.currentTetro, y: 2 }
        };
        const r = reducer(initialState, MoveDown);
        expect(r).toEqual(finalState);
      });

      it('should not increase current tetro y position, lock current tetro on board, collision ', () => {
        const initialState: InternalState = {
          ...INITIAL_STATE,
          board: BOARD_HALF_S_Y,
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

    describe('Move Right', () => {
      it('should increase current tetro x position, leaving the board un tocuched, no collission', () => {
        const test: InternalState = {
          ...INITIAL_STATE,
          currentTetro: { ...INITIAL_STATE.currentTetro, x: 1 }
        };
        const r = reducer(INITIAL_STATE, MoveRight);
        expect(r).toEqual(test);
      });

      it('should increase current tetro x position, leaving the board un touched, no collision', () => {
        const initialState: InternalState = {
          ...INITIAL_STATE,
          board: BOARD_HALF_S_X,
          currentTetro: { ...INITIAL_STATE.currentTetro, x: 1 }
        };
        const finalState: InternalState = {
          ...INITIAL_STATE,
          board: BOARD_HALF_S_X,
          currentTetro: { ...INITIAL_STATE.currentTetro, x: 2 }
        };
        const r = reducer(initialState, MoveRight);
        expect(r).toEqual(finalState);
      });

      it('should not increase current tetro x position, lock current tetro on board, collision ', () => {
        const initialState: InternalState = {
          ...INITIAL_STATE,
          board: BOARD_HALF_S_X,
          currentTetro: { ...INITIAL_STATE.currentTetro, x: 4 }
        };
        const finalState: InternalState = {
          ...INITIAL_STATE,
          board: [
            ...Array(4).fill([...Array(4).fill(0), I, ...Array(5).fill(S)]),
            ...Array(16).fill([...Array(5).fill(0), ...Array(5).fill(S)])
          ],
          currentTetro: { ...INITIAL_STATE.currentTetro, x: 4 }
        };
        const r = reducer(initialState, MoveRight);
        expect(r).toEqual(finalState);
      });
    });

    describe('Move Left', () => {
      it('should decrease current tetro x position, leaving the board un tocuched, no collission', () => {
        const initialState: InternalState = {
          ...INITIAL_STATE,
          currentTetro: { ...INITIAL_STATE.currentTetro, x: 1 }
        };
        const finalState: InternalState = {
          ...INITIAL_STATE,
          currentTetro: { ...INITIAL_STATE.currentTetro, x: 0 }
        };
        const r = reducer(initialState, MoveLeft);
        expect(r).toEqual(finalState);
      });

      it('should decrease current tetro x position, leaving the board un touched, no collision', () => {
        const initialState: InternalState = {
          ...INITIAL_STATE,
          board: BOARD_HALF_S_X,
          currentTetro: { ...INITIAL_STATE.currentTetro, x: 1 }
        };
        const finalState: InternalState = {
          ...INITIAL_STATE,
          board: BOARD_HALF_S_X,
          currentTetro: { ...INITIAL_STATE.currentTetro, x: 0 }
        };
        const r = reducer(initialState, MoveLeft);
        expect(r).toEqual(finalState);
      });

      it('should not decrease current tetro x position, lock current tetro on board, collision ', () => {
        const initialState: InternalState = {
          ...INITIAL_STATE,
          board: BOARD_HALF_S_X_REV,
          currentTetro: { ...INITIAL_STATE.currentTetro, x: 5 }
        };
        const finalState: InternalState = {
          ...INITIAL_STATE,
          board: [
            ...Array(4).fill([...Array(5).fill(S), I, ...Array(4).fill(0)]),
            ...Array(16).fill([...Array(5).fill(S), ...Array(5).fill(0)])
          ],
          currentTetro: { ...INITIAL_STATE.currentTetro, x: 5 }
        };
        const r = reducer(initialState, MoveLeft);
        expect(r).toEqual(finalState);
      });
    });
  });
});
