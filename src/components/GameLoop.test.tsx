import React from 'react';
import renderer from 'react-test-renderer';
import { GameLoop } from './GameLoop';
import { mockStore } from '../utils';
import { Provider } from 'react-redux';

describe('<GameLoop />', () => {
  const dkr = {
    get: jest.fn(),
    set: jest.fn(),
  };
  const cb = jest.fn();

  it('should not render any dom', () => {
    const store = mockStore();
    const tree = renderer
      .create(
        <Provider store={store}>
          <GameLoop level={1} detectionKeyRepeat={dkr} cb={cb} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
