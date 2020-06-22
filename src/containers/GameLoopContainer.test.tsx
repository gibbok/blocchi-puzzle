import { mapStateToProps, GameLoopContainer } from './GameLoopContainer';
import { TetroEnum } from '../game/types';
import { mkInitialState } from '../store';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { mockStore, mockContext } from '../utils';
import { AppContextProvider } from '../context';

describe('<GameLoopContainer />', () => {
  jest.useFakeTimers();
  it('should mapStateToProps correctly', () => {
    const input = mkInitialState(TetroEnum.I, TetroEnum.J);
    const output = mapStateToProps(input);
    const result = { level: 1 };

    expect(output).toMatchObject(result);
  });

  it('should render correctly', () => {
    const store = mockStore();
    const context = mockContext();
    const withProvider = (
      <Provider store={store}>
        <AppContextProvider value={context}>
          <GameLoopContainer />
        </AppContextProvider>
      </Provider>
    );
    const component = renderer.create(withProvider);

    expect(component.root).toBeTruthy();
  });
});
