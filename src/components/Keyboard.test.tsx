import { handleKeydown, Keyboard } from './Keyboard';
import { KeyEnum } from '../game/types';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { mockStore, mkDkr } from '../utils';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

const dispatchEvent = (key: KeyEnum) => {
  document.dispatchEvent(
    new KeyboardEvent('keydown', {
      code: key,
      bubbles: true,
    })
  );
};

describe('Keyboard', () => {
  const dkr = mkDkr(false);

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
    let container: Element | null;
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

    it('should listen to events keydown and keyup execute appropriate actions', () => {
      jest.useFakeTimers();

      const store = mockStore(true);
      const dkr = mkDkr(false);

      act(() => {
        ReactDOM.render(
          <Provider store={store}>
            <Keyboard detectionKeyRepeat={dkr} />
          </Provider>,
          container
        );

        dispatchEvent(KeyEnum.Up);
        jest.advanceTimersByTime(1000);
        dispatchEvent(KeyEnum.Right);
        jest.advanceTimersByTime(2000);
        dispatchEvent(KeyEnum.Left);
        jest.advanceTimersByTime(3000);
        dispatchEvent(KeyEnum.Down);
        jest.advanceTimersByTime(4000);

        // throttle will not dispatch these actions
        dispatchEvent(KeyEnum.Right);
        dispatchEvent(KeyEnum.Right);
        dispatchEvent(KeyEnum.Right);
        dispatchEvent(KeyEnum.Right);
        dispatchEvent(KeyEnum.Right);
        jest.advanceTimersByTime(5000);

        const actions = store.getActions();
        const expectedPayload = [
          { type: 'game/moveUp', paylaod: undefined },
          { type: 'game/moveRight', paylaod: undefined },
          { type: 'game/moveLeft', paylaod: undefined },
          { type: 'game/moveDown', paylaod: undefined },
          { type: 'game/checkBoard', payload: undefined },
          { type: 'game/gameOver', payload: undefined },
          { type: 'game/moveRight', paylaod: undefined }, // throttle
        ];

        console.log(actions);

        expect(actions).toEqual(expectedPayload);

        document.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));

        expect(dkr.get()).toBeFalsy();
      });
    });

    it('should unmount property', () => {
      const store = mockStore(true);
      const dkr = mkDkr(false);
      const cbMock = jest.fn();

      act(() => {
        ReactDOM.render(
          <Provider store={store}>
            <Keyboard detectionKeyRepeat={dkr} />
          </Provider>,
          container
        );

        const removeEventListenerMock: jest.SpyInstance = jest
          .spyOn(document, 'removeEventListener')
          .mockImplementation(cbMock);

        if (container) {
          ReactDOM.unmountComponentAtNode(container);
          expect(cbMock).toHaveBeenCalled();
        }

        removeEventListenerMock.mockRestore();
      });
    });
  });
});
