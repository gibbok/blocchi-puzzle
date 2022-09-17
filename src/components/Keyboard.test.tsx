import { canExecuteCbIfInTreshold, handleKeydown, Keyboard } from './Keyboard';
import { KeyEnum } from '../game/types';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { mockStore, mockContext } from '../utils';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { AppContextProvider } from '../context';

describe('Keyboard', () => {
  const setRepeatMock = jest.fn();

  describe('handleKeydown', () => {
    const up = jest.fn();
    const right = jest.fn();
    const down = jest.fn();
    const left = jest.fn();

    it('should execute up callback', () => {
      handleKeydown(setRepeatMock, up, right, down, left)(KeyEnum.Up, false);
      expect(up).toHaveBeenCalled();
    });

    it('should execute right callback', () => {
      handleKeydown(setRepeatMock, up, right, down, right)(KeyEnum.Right, false);
      expect(right).toHaveBeenCalled();
    });

    it('should execute down callback', () => {
      handleKeydown(setRepeatMock, up, right, down, down)(KeyEnum.Down, false);
      expect(down).toHaveBeenCalled();
    });

    it('should execute left callback', () => {
      handleKeydown(setRepeatMock, up, right, down, left)(KeyEnum.Left, false);
      expect(left).toHaveBeenCalled();
    });
  });

  describe('<Keyboard />', () => {
    const store = mockStore();
    const context = mockContext();
    const tree = renderer.create(
      <Provider store={store}>
        <AppContextProvider value={context}>
          <Keyboard />
        </AppContextProvider>
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

    it('should unmount property', () => {
      const store = mockStore(true);
      const cbMock = jest.fn();
      const context = mockContext();

      act(() => {
        ReactDOM.render(
          <Provider store={store}>
            <AppContextProvider value={context}>
              <Keyboard />
            </AppContextProvider>
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

  describe('canExecuteCbIfInTreshold', () => {
    it('should call callback if current time is within treshold', () => {
      const cb = jest.fn();
      canExecuteCbIfInTreshold(1000, 2000, cb);
      expect(cb).toBeCalledTimes(1);
    });

    it('should not call callback if current time is not within treshold', () => {
      const cb = jest.fn();
      canExecuteCbIfInTreshold(1000, 1001, cb);
      expect(cb).not.toBeCalledTimes(1);
    });
  });
});
