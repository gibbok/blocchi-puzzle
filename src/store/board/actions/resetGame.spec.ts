import { mkInitialState, gameSlice } from '../../../store';

const INITIAL_STATE = mkInitialState();

export const {
  actions: { resetGame },
  reducer,
} = gameSlice;

describe('resetGame', () => {
  it('should not reset internal state if game is ongoing', () => {
    const r = reducer(INITIAL_STATE, resetGame);
    expect(r).toEqual(INITIAL_STATE);
    expect(r.isGameOver).toEqual(false);
  });

  it('should reset internal state if game is over', () => {
    const stateGameOver = {
      ...INITIAL_STATE,
      isGameOver: true,
    };
    const r = reducer(stateGameOver, resetGame);
    expect(r.isGameOver).toEqual(false);
  });
});
