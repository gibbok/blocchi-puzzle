import { mkInitialState } from '../../../store';
import { InternalState, ScreenEnum } from '../../../game/types';
import { screenGame } from './screenGame';

describe('screenGame', () => {
  it('should return previouse state plus update screen property', () => {
    const prevState: InternalState = mkInitialState();
    expect(screenGame(prevState)).toMatchObject({ ...prevState, screen: ScreenEnum.Game });
  });
});
