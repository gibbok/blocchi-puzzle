import React from 'react';
import renderer from 'react-test-renderer';
import { GameLoop, loop } from './GameLoop';
import { mockStore, mockContext } from '../utils';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { AppContextProvider } from '../context';

describe('<GameLoop />', () => {
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
    const cb = jest.fn();
    const store = mockStore();
    const context = mockContext();
    const tree = renderer
      .create(
        <Provider store={store}>
          <AppContextProvider value={context}>
            <GameLoop level={1} cb={cb} />
          </AppContextProvider>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shoud umount and remove event handler', () => {
    const store = mockStore(true);
    const cbMock = jest.fn();
    const cbCafMock = jest.fn();
    const context = mockContext();

    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <AppContextProvider value={context}>
            <GameLoop level={1} cb={cbMock} />
          </AppContextProvider>
        </Provider>,
        container
      );

      const cancelAnimationFrameMock: jest.SpyInstance = jest
        .spyOn(window, 'cancelAnimationFrame')
        .mockImplementation(cbCafMock);

      if (container) {
        ReactDOM.unmountComponentAtNode(container);
        expect(cbCafMock).toHaveBeenCalled();
      }
      cancelAnimationFrameMock.mockRestore();
    });
  });

  describe('loop', () => {
    it('should call dispatch and update last time, if time passed is over threshold and user does not hold key', () => {
      const setLastTimeCbMock = jest.fn();
      const cbMock = jest.fn();
      const dispatchCbMock = jest.fn().mockImplementation(() => undefined);

      loop(5000, 1, 1000, false, setLastTimeCbMock, cbMock, dispatchCbMock);

      expect(setLastTimeCbMock).toHaveBeenCalled();
      expect(dispatchCbMock).toHaveBeenCalled();
    });

    it('should do not dispatch and update last time, if time passed is not over threshold', () => {
      const setLastTimeCbMock = jest.fn();
      const cbMock = jest.fn();
      const dispatchCbMock = jest.fn().mockImplementation(() => undefined);

      loop(4500, 1, 5000, false, setLastTimeCbMock, cbMock, dispatchCbMock);

      expect(setLastTimeCbMock).not.toHaveBeenCalled();
      expect(dispatchCbMock).not.toHaveBeenCalled();
    });

    it('should call dispatch and update last time, if time passed is over threshold and user hold key', () => {
      const setLastTimeCbMock = jest.fn();
      const cbMock = jest.fn();
      const dispatchCbMock = jest.fn().mockImplementation(() => undefined);

      loop(5000, 1, 1000, true, setLastTimeCbMock, cbMock, dispatchCbMock);

      expect(setLastTimeCbMock).toHaveBeenCalled();
      expect(dispatchCbMock).not.toHaveBeenCalled();
    });
  });
});
