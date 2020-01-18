import { InternalState, ScreenEnum } from '~game/types';

export const gameOver = (prevState: InternalState): InternalState => {
  const { isGameOver } = prevState;
  console.log('isGameOver', isGameOver);
  return isGameOver ? { ...prevState, screen: ScreenEnum.Over } : prevState;
};
