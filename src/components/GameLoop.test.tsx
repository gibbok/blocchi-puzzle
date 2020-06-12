import React from 'react';
import renderer from 'react-test-renderer';
import { GameLoop, loop } from './GameLoop';
import { mockStore } from '../utils';
import { Provider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

const mkDkr = (isKeyHold: boolean) => ({
  get: jest.fn().mockImplementation(() => isKeyHold),
  set: jest.fn(),
});

describe('<GameLoop />', () => {
  const cb = jest.fn();
  const store = mockStore();

  it('should not render any dom', () => {
    const dkr = mkDkr(false);
    const tree = renderer
      .create(
        <Provider store={store}>
          <GameLoop level={1} detectionKeyRepeat={dkr} cb={cb} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  let container: any = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should mount cann within requestAnimationFrame', () => {
    const cb = jest.fn();
    const dkr = mkDkr(false);
    const store = mockStore();
    const cbRaf = jest.fn();

    jest.useFakeTimers();
    act(() => {
      jest
        .spyOn(window, 'requestAnimationFrame')
        .mockImplementation(() => setTimeout(() => cbRaf(), 0));

      jest.advanceTimersByTime(5000);
      const comp = (
        <Provider store={store}>
          <GameLoop level={1} detectionKeyRepeat={dkr} cb={cb} />
        </Provider>
      );
      render(comp, container);

      expect(cbRaf).toHaveBeenCalled();
      console.log(store.getActions());
    });
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
