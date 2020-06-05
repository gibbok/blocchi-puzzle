import { mapStateToProps, ScoreContainer } from './ScoreContainer';
import { TetroEnum } from '../game/types';
import { mkInitialState } from '../store';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { mockStore } from '../utils';

describe('<ScoreContainer />', () => {
  it('should mapStateToProps correctly', () => {
    const input = mkInitialState(TetroEnum.I, TetroEnum.J);
    const output = mapStateToProps(input);
    const result = { score: 0, level: 1 };

    expect(output).toMatchObject(result);
  });

  it('should render correctly', () => {
    const store = mockStore();
    const withProvider = (
      <Provider store={store}>
        <ScoreContainer />
      </Provider>
    );
    const component = renderer.create(withProvider);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
