import React from 'react';
import renderer from 'react-test-renderer';
import { GameLoop, loop } from './GameLoop';
import { mockStore } from '../utils';
import { Provider } from 'react-redux';

describe('<GameLoop />', () => {
  const dkr = {
    get: jest.fn(),
    set: jest.fn(),
  };
  const cb = jest.fn();
  const store = mockStore();

  it('should not render any dom', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <GameLoop level={1} detectionKeyRepeat={dkr} cb={cb} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toMatchSnapshot();
  });

  describe('loop', () => {
    const dkr = {
      get: jest.fn().mockImplementation(() => false),
      set: jest.fn(),
    };
    const setLastTimeCbMock = jest.fn();
    const cbMock = jest.fn();
    const dispatchCbMock = jest.fn().mockImplementation(() => undefined);
    it('should call dispatch and update last time, when user does not hold key', () => {
      loop(5000, 1, 1000, dkr, setLastTimeCbMock, cbMock, dispatchCbMock);
      expect(setLastTimeCbMock).toHaveBeenCalled();
      expect(cbMock).not.toHaveBeenCalled();
      expect(dispatchCbMock).toHaveBeenCalled();
    });
  });
});
