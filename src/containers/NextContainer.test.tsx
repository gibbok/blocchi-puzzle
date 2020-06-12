import { mkInitialState } from '../store';
import { TetroEnum, DirectionEnum } from '../game/types';
import { mapStateToProps, NextContainer } from './NextContainer';
import { Provider } from 'react-redux';
import React from 'react';
import renderer from 'react-test-renderer';
import { mockStore } from '../utils';

describe('<NextContainer />', () => {
  it('should mapStateToProps correctly', () => {
    const input = mkInitialState(TetroEnum.I, TetroEnum.J);
    const result = mapStateToProps(input);
    const output = { type: TetroEnum.J, direction: DirectionEnum.N };

    expect(result).toMatchObject(output);
  });

  it('should render NextContainer', () => {
    const store = mockStore();
    const withProvider = (
      <Provider store={store}>
        <NextContainer />
      </Provider>
    );
    const component = renderer.create(withProvider);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
