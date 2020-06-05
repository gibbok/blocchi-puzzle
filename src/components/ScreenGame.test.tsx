import renderer from 'react-test-renderer';
import React from 'react';
import { ScreenGame } from './ScreenGame';
import { mockStore } from '../utils';
import { Provider } from 'react-redux';
import { PadLeft, PadRight, PadDown, PadRotate } from './Pad';
import { act } from 'react-dom/test-utils';

describe('<ScreenGame />', () => {
  it('should render', () => {
    const store = mockStore();
    const tree = renderer
      .create(
        <Provider store={store}>
          <ScreenGame />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should dispath actions when clicking on navigation', () => {
    const store = mockStore(true);
    const tree = renderer.create(
      <Provider store={store}>
        <ScreenGame />
      </Provider>
    );
    const instance = tree.root;

    act(() => {
      const padLeft = instance?.findByType(PadLeft);
      padLeft.props.onClick();

      const padRight = instance?.findByType(PadRight);
      padRight.props.onClick();

      const padDown = instance?.findByType(PadDown);
      padDown.props.onClick();

      const padRotate = instance?.findByType(PadRotate);
      padRotate.props.onClick();

      const actions = store.getActions();

      const expectedPayload = [
        { type: 'game/moveLeft' },
        { type: 'game/moveRight' },
        { type: 'game/moveDown' },
        { type: 'game/checkBoard' },
        { type: 'game/gameOver' },
        { type: 'game/moveUp' },
      ];
      expect(actions).toEqual(expectedPayload);
    });
  });
});
