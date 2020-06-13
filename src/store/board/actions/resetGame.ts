import { mkInitialState } from '../../reducer';
import { InternalState } from '../../../game/types';
import { getRandomTetroEnum } from '../../../game';

/**
 * Start a new game by resetting its state.
 * @param prevState Previous state
 */
export const resetGame = (prevState: InternalState): InternalState =>
  prevState.isGameOver ? mkInitialState(getRandomTetroEnum()(), getRandomTetroEnum()()) : prevState;
