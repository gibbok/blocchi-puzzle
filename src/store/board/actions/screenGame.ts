import { InternalState, ScreenEnum } from '../../../game/types';

export const screenGame = (prevState: InternalState): InternalState => {
  return { ...prevState, screen: ScreenEnum.Game };
};
