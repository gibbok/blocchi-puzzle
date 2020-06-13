import { InternalState, ScreenEnum } from '../../../game/types';

/**
 * Switch to screen game over logic.
 * @param prevState Previous game
 */
export const gameOver = (prevState: InternalState): InternalState => {
  const { isGameOver } = prevState;
  return isGameOver ? { ...prevState, screen: ScreenEnum.Over } : prevState;
};
