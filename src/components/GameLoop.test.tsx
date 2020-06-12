import React from 'react';
import renderer from 'react-test-renderer';
import { GameLoop, loop } from './GameLoop';
import { mockStore, mkDkr } from '../utils';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';

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
    const dkr = mkDkr(false);
    const cb = jest.fn();
    const store = mockStore();

    jest.useFakeTimers();
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(jest.fn());

    jest.advanceTimersByTime(5000);
    const tree = renderer
      .create(
        <Provider store={store}>
          <GameLoop level={1} detectionKeyRepeat={dkr} cb={cb} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shoud go withi useEffect', () => {
    const store = mockStore(true);
    const dkr = mkDkr(false);
    const cbMock = jest.fn();
    const cbCafMock = jest.fn();

    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <GameLoop level={1} detectionKeyRepeat={dkr} cb={cbMock} />
        </Provider>,
        container
      );
    });

    const cancelAnimationFrameMock: jest.SpyInstance = jest
      .spyOn(window, 'cancelAnimationFrame')
      .mockImplementation(cbCafMock);

    if (container) {
      ReactDOM.unmountComponentAtNode(container);
      expect(cbCafMock).toHaveBeenCalled();
    }
    cancelAnimationFrameMock.mockRestore();
  });

  describe('loop', () => {
    it('should call dispatch and update last time, if time passed is over threshold and user does not hold key', () => {
      const dkr = mkDkr(false);
      const setLastTimeCbMock = jest.fn();
      const cbMock = jest.fn();
      const dispatchCbMock = jest.fn().mockImplementation(() => undefined);

      loop(5000, 1, 1000, dkr, setLastTimeCbMock, cbMock, dispatchCbMock);

      expect(setLastTimeCbMock).toHaveBeenCalled();
      expect(dispatchCbMock).toHaveBeenCalled();
    });

    it('should do not dispatch and update last time, if time passed is not over threshold', () => {
      const dkr = mkDkr(false);
      const setLastTimeCbMock = jest.fn();
      const cbMock = jest.fn();
      const dispatchCbMock = jest.fn().mockImplementation(() => undefined);

      loop(4500, 1, 5000, dkr, setLastTimeCbMock, cbMock, dispatchCbMock);

      expect(setLastTimeCbMock).not.toHaveBeenCalled();
      expect(dispatchCbMock).not.toHaveBeenCalled();
    });

    it('should call dispatch and update last time, if time passed is over threshold and user hold key', () => {
      const dkr = mkDkr(true);
      const setLastTimeCbMock = jest.fn();
      const cbMock = jest.fn();
      const dispatchCbMock = jest.fn().mockImplementation(() => undefined);

      loop(5000, 1, 1000, dkr, setLastTimeCbMock, cbMock, dispatchCbMock);

      expect(setLastTimeCbMock).toHaveBeenCalled();
      expect(dispatchCbMock).not.toHaveBeenCalled();
    });
  });
});
