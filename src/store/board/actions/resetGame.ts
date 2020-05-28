import { mkInitialState } from '../../reducer';
import { InternalState } from '../../../game/types';
import { getRandomTetroEnum } from '../../../game';

export const resetGame = (prevState: InternalState): InternalState =>
  prevState.isGameOver ? mkInitialState(getRandomTetroEnum()(), getRandomTetroEnum()()) : prevState;
