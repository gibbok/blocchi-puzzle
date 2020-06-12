import { handleKeydown, Keyboard } from './Keyboard';
import { KeyEnum } from '../game/types';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { mockStore } from '../utils';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

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

  describe('<Keyboard />', () => {
    const store = mockStore();
    const tree = renderer.create(
      <Provider store={store}>
        <Keyboard detectionKeyRepeat={dkr} />
      </Provider>
    );
    let container: HTMLElement | null;
    let mockUseEffect: jest.SpyInstance;

    beforeAll(() => {
      mockUseEffect = jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect);
    });

    afterAll(() => {
      mockUseEffect.mockRestore();
    });

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      if (container) {
        document.body.removeChild(container);
        container = null;
      }
    });

    it('should not render any dom', () => {
      tree.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should listen to events and dispatch actions', () => {
      act(() => {
        ReactDOM.render(
          <Provider store={store}>
            <Keyboard detectionKeyRepeat={dkr} />
          </Provider>,
          container
        );
        document.dispatchEvent(
          new KeyboardEvent('keydown', {
            code: KeyEnum.Up,
            bubbles: true,
          })
        );
        document.dispatchEvent(
          new KeyboardEvent('keydown', {
            code: KeyEnum.Right,
            bubbles: true,
          })
        );
        document.dispatchEvent(
          new KeyboardEvent('keydown', {
            code: KeyEnum.Left,
            bubbles: true,
          })
        );
        const actions = store.getActions();
        const expectedPayload = [
          { type: 'game/moveUp', paylaod: undefined },
          { type: 'game/moveRight', paylaod: undefined },
          { type: 'game/moveLeft', paylaod: undefined },
        ];
        expect(actions).toEqual(expectedPayload);
      });
    });
  });
});
