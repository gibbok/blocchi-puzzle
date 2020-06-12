import { mapStateToProps, ScreenContainer } from './ScreenContainer';
import { TetroEnum, ScreenEnum } from '../game/types';
import { mkInitialState } from '../store';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { mockStore } from '../utils';

describe('<ScreenContainer />', () => {
  it('should mapStateToProps correctly', () => {
    const input = mkInitialState(TetroEnum.I, TetroEnum.J);
    const output = mapStateToProps(input);
    const result = { screen: ScreenEnum.Intro };

    expect(output).toMatchObject(result);
  });

  it('should render correctly', () => {
    const store = mockStore();
    const withProvider = (
      <Provider store={store}>
        <ScreenContainer />
      </Provider>
    );
    const component = renderer.create(withProvider);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
