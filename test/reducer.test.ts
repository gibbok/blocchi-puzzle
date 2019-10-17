import { gameSlice, mkInitialState, mkPublicState } from '../src/reducer';
const { actions, reducer } = gameSlice;

import { InternalState, I, S, NO, WE, ES, PubicState } from '../src/types';
import {
  BOARD_HALF_S_Y,
  BOARD_ROW_EMPTY,
  BOARD_HALF_S_X,
  BOARD_HALF_S_X_REV,
  BOARD_EMPTY
} from './data.support.test';
// import { logger } from '../src/utils';

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

    describe('Move Down', () => {
      it('should increase current tetro y position, leaving the board un touched, no collision', () => {
        const test: InternalState = {
          ...INITIAL_STATE,
          currentTetro: { ...INITIAL_STATE.currentTetro, y: 1 }
        };
        const r = reducer(INITIAL_STATE, actions.moveDown);
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
        const r = reducer(initialState, actions.moveDown);
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
        const r = reducer(initialState, actions.moveDown);
        expect(r).toEqual(finalState);
      });
    });

    describe('Move Right', () => {
      it('should increase current tetro x position, leaving the board un tocuched, no collission', () => {
        const test: InternalState = {
          ...INITIAL_STATE,
          currentTetro: { ...INITIAL_STATE.currentTetro, x: 1 }
        };
        const r = reducer(INITIAL_STATE, actions.moveRight);
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
        const r = reducer(initialState, actions.moveRight);
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
        const r = reducer(initialState, actions.moveRight);
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
        const r = reducer(initialState, actions.moveLeft);
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
        const r = reducer(initialState, actions.moveLeft);
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
        const r = reducer(initialState, actions.moveLeft);
        expect(r).toEqual(finalState);
      });
    });

    describe('Move Up', () => {
      it('should rotate the tetro direction ACW, no collision', () => {
        const initialState: InternalState = {
          ...INITIAL_STATE,
          currentTetro: { ...INITIAL_STATE.currentTetro, direction: NO }
        };
        const finalState: InternalState = {
          ...INITIAL_STATE,
          currentTetro: { ...INITIAL_STATE.currentTetro, direction: WE }
        };
        const r = reducer(initialState, actions.moveUp);
        expect(r).toEqual(finalState);
      });

      it('should not be able to rotate, collision', () => {
        const initialState: InternalState = {
          ...INITIAL_STATE,
          board: BOARD_HALF_S_Y,
          currentTetro: { ...INITIAL_STATE.currentTetro, direction: ES, x: 0, y: 5 }
        };
        const finalState: InternalState = {
          ...INITIAL_STATE,
          board: BOARD_HALF_S_Y,
          currentTetro: { ...INITIAL_STATE.currentTetro, direction: ES, x: 0, y: 5 }
        };
        const r = reducer(initialState, actions.moveUp);
        expect(r).toEqual(finalState);
      });
    });

    describe('CheckBoard', () => {
      it('should update level, lines, score when row completed are detected on the board', () => {
        const initialState: InternalState = {
          ...INITIAL_STATE,
          board: BOARD_HALF_S_Y,
          currentTetro: { ...INITIAL_STATE.currentTetro, direction: ES, x: 0, y: 5 }
        };
        const finalState: InternalState = {
          ...INITIAL_STATE,
          board: BOARD_EMPTY,
          currentTetro: { ...INITIAL_STATE.currentTetro, direction: ES, x: 0, y: 5 },
          level: 2,
          lines: 14,
          score: 1400
        };
        const r = reducer(initialState, actions.checkBoard);
        expect(r).toEqual(finalState);
      });

      it('should not update level, lines, score when no row completed are detected', () => {
        const initialState: InternalState = { ...INITIAL_STATE };
        const finalState: InternalState = { ...INITIAL_STATE };
        const r = reducer(initialState, actions.checkBoard);
        expect(r).toEqual(finalState);
      });
    });

    describe('mkPublicState', () => {
      it('should return  the pubic state included computed board to render and removed hidden properties', () => {
        const input: InternalState = INITIAL_STATE;
        const { score, level, lines, nextTetro } = INITIAL_STATE;
        const board = [
          ...Array(4).fill([I, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          ...Array(16).fill(BOARD_ROW_EMPTY)
        ];
        const output: PubicState = { board, score, level, lines, nextTetro };
        expect(mkPublicState(input)).toEqual(output);
      });
    });
  });
});
