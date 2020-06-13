import { InternalState, ScreenEnum } from '../../../game/types';

/**
 * Switch to screen game.
 * @param prevState Previous state
 */
export const screenGame = (prevState: InternalState): InternalState => {
  return { ...prevState, screen: ScreenEnum.Game };
};
