import { InternalState, ScreenEnum } from '~game/types';

export const gameOver = (prevState: InternalState): InternalState => {
  const { isGameOver } = prevState;
  return isGameOver ? { ...prevState, screen: ScreenEnum.Over } : prevState;
};
