import { mapStateToProps, GameLoopContainer } from './GameLoopContainer';
import { TetroEnum } from '../game/types';
import { mkInitialState } from '../store';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { detectorKeyRepeat } from '../components/detectorKeyRepeat';

jest.useFakeTimers();

describe('<GameLoopContainer />', () => {
  it('should mapStateToProps correctly', () => {
    const input = mkInitialState(TetroEnum.I, TetroEnum.J);
    const output = mapStateToProps(input);
    const result = { level: 1 };

    expect(output).toMatchObject(result);
  });

  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const initialState = mkInitialState(TetroEnum.I, TetroEnum.J);
    const store = mockStore(initialState);
    const withProvider = (
      <Provider store={store}>
        <GameLoopContainer detectionKeyRepeat={detectorKeyRepeat} />
      </Provider>
    );
    const component = renderer.create(withProvider);

    expect(component.root).toBeTruthy();
  });
});
