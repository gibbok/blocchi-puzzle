import { mkInitialState } from '../store';
import { TetroEnum, DirectionEnum } from '../game/types';
import { mapStateToProps } from './NextContainer';

describe('<NextContainer />', () => {
  it('should mapStateToProps correctly', () => {
    const input = mkInitialState(TetroEnum.I, TetroEnum.J);
    const result = mapStateToProps(input);
    const output = { type: TetroEnum.J, direction: DirectionEnum.N };
    console.log(result, output);
    expect(result).toMatchObject(output);
  });
});
