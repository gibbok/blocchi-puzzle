import { mkInitialState, gameSlice } from '~store';
import { InternalState, I, S } from '~game/types';
import { BOARD_HALF_S_X, logger } from '~utils';

const INITIAL_STATE = mkInitialState();
export const {
  actions: { moveDown, moveLeft, moveRight, moveUp, checkBoard },
  reducer
} = gameSlice;

describe.only('Move Right', () => {
  it('should increase current tetro x position, leaving the board un touched, no collission', () => {
    const test: InternalState = {
      ...INITIAL_STATE,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 1 }
    };
    const r = reducer(INITIAL_STATE, moveRight);
    expect(r).toEqual(test);
  });
  // DOING
  it.only('SPO 1 - should not push current tetro x position over the edge, leaving the board un touched, no collission', () => {
    const initialState: InternalState = {
      ...INITIAL_STATE,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 6 }
    };
    const finalState: InternalState = {
      ...INITIAL_STATE,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 6 }
    };
    const r = reducer(initialState, moveRight);
    console.log('XXX');
    logger(initialState.board);
    logger(finalState.board);
    logger(r.board);
    expect(r).toEqual(finalState);
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
    const r = reducer(initialState, moveRight);
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
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 3 }
    };
    const r = reducer(initialState, moveRight);
    console.log('XXX');
    logger(initialState.board);
    logger(finalState.board);
    logger(r.board);
    expect(r).toEqual(finalState);
  });
});
