import { mapStateToProps } from './InfoContainer';
import { TetroEnum } from '../game/types';
import { mkInitialState } from '../store';

describe('<InfoContainer />', () => {
  it('should mapStateToProps correctly', () => {
    const input = mkInitialState(TetroEnum.I, TetroEnum.J);
    const output = mapStateToProps(input);
    const result = { score: 0, level: 1, lines: 0 };
    expect(output).toMatchObject(result);
  });
});
