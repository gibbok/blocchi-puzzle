import { handleKeydown, Keyboard } from './Keyboard';
import { KeyEnum, TetroEnum } from '../game/types';
import renderer from 'react-test-renderer';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mkInitialState } from '../store';
import { Provider } from 'react-redux';

describe('Keyboard', () => {
  const dkr = {
    set: jest.fn(),
    get: jest.fn(),
  };
  describe('handleKeydown', () => {
    const up = jest.fn();
    const right = jest.fn();
    const down = jest.fn();
    const left = jest.fn();

    it('should execute up callback', () => {
      handleKeydown(dkr, up, right, down, left)(KeyEnum.Up, false);
      expect(up).toHaveBeenCalled();
    });

    it('should execute right callback', () => {
      handleKeydown(dkr, up, right, down, right)(KeyEnum.Right, false);
      expect(right).toHaveBeenCalled();
    });

    it('should execute down callback', () => {
      handleKeydown(dkr, up, right, down, down)(KeyEnum.Down, false);
      expect(down).toHaveBeenCalled();
    });

    it('should execute left callback', () => {
      handleKeydown(dkr, up, right, down, left)(KeyEnum.Left, false);
      expect(left).toHaveBeenCalled();
    });
  });

  describe('Keyboard', () => {
    it('should not render any dom', () => {
      const mockStore = configureMockStore();
      const initialState = mkInitialState(TetroEnum.I, TetroEnum.J);
      const store = mockStore(initialState);
      const tree = renderer
        .create(
          <Provider store={store}>
            <Keyboard detectionKeyRepeat={dkr} />
          </Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
