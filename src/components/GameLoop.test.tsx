import React from 'react';
import renderer from 'react-test-renderer';
import { GameLoop, loop } from './GameLoop';
import { mockStore } from '../utils';
import { Provider } from 'react-redux';

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

  it('should mount xx', () => {
    const cb = jest.fn();
    const dkr = mkDkr(false);
    const store = mockStore();

    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => setTimeout(cb, 0));
    const cbRaf = jest.fn();
    window.requestAnimationFrame = (x) => cbRaf(x);

    const comp = (
      <Provider store={store}>
        <GameLoop level={1} detectionKeyRepeat={dkr} cb={cb} />
      </Provider>
    );
    const tree = renderer.create(comp);
    tree.update(comp);

    expect(tree).toMatchSnapshot();
    expect(cbRaf).toHaveBeenCalled();
    const actions = store.getActions();
    const expectedPayload = { type: 'ADD_TODO' };
    expect(actions).toEqual([expectedPayload]);
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
