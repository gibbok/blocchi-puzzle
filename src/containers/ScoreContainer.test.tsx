import { mapStateToProps, ScoreContainer } from './ScoreContainer';
import { TetroEnum } from '../game/types';
import { mkInitialState } from '../store';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';

describe('<ScoreContainer />', () => {
  it('should mapStateToProps correctly', () => {
    const input = mkInitialState(TetroEnum.I, TetroEnum.J);
    const output = mapStateToProps(input);
    const result = { score: 0, level: 1 };

    expect(output).toMatchObject(result);
  });

  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const initialState = mkInitialState(TetroEnum.I, TetroEnum.J);
    const store = mockStore(initialState);
    const withProvider = (
      <Provider store={store}>
        <ScoreContainer />
      </Provider>
    );
    const component = renderer.create(withProvider);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
