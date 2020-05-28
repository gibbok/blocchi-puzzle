import { mkInitialState } from '../../../store';
import { InternalState, ScreenEnum, TetroEnum } from '../../../game/types';
import { screenGame } from './screenGame';

describe('screenGame', () => {
  it('should return previouse state plus update screen property', () => {
    const prevState: InternalState = mkInitialState(TetroEnum.I, TetroEnum.J);
    expect(screenGame(prevState)).toMatchObject({ ...prevState, screen: ScreenEnum.Game });
  });
});
