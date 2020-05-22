import { mkInitialState } from '../../reducer';
import { InternalState } from '../../../game/types';

export const resetGame = (prevState: InternalState) => {
  return prevState.isGameOver ? mkInitialState() : prevState;
};
