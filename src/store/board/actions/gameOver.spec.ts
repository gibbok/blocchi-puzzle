import { mkInitialState } from '../../../store';
import { InternalState, ScreenEnum } from '../../../game/types';
import { gameOver } from './gameOver';

const prevState: InternalState = mkInitialState();
describe('gameOver', () => {
  it('should return previouse state plus screen Intro if game is not ended', () => {
    expect(gameOver({ ...prevState, isGameOver: false })).toMatchObject({
      ...prevState,
      isGameOver: false,
      screen: ScreenEnum.Intro,
    });
  });
  it('should return previouse state plus screen Over if game is ended', () => {
    expect(gameOver({ ...prevState, isGameOver: true })).toMatchObject({
      ...prevState,
      isGameOver: true,
      screen: ScreenEnum.Over,
    });
  });
});
