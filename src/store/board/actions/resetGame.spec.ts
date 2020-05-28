import { mkInitialState, gameSlicePure } from '../../../store';
import { TetroEnum } from '../../../game/types';

const INITIAL_STATE = mkInitialState(TetroEnum.I, TetroEnum.J);

const {
  actions: { resetGame },
  reducer,
} = gameSlicePure(TetroEnum.I, TetroEnum.J);

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
