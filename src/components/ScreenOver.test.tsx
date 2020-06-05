import { ScreenOver } from './ScreenOver';
import renderer from 'react-test-renderer';
import React from 'react';
import { mockStore } from '../utils';
import { Provider } from 'react-redux';
import { Button } from './Button';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('ScreenOver', () => {
  const store = mockStore();
  let container: HTMLElement | null;

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

  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ScreenOver />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have button with onClick property', () => {
    const store = mockStore();
    const tree = renderer.create(
      <Provider store={store}>
        <ScreenOver />
      </Provider>
    );
    const instance = tree.root;
    expect(instance.findByType(Button).props.onClick).toBeTruthy();
  });

  it('should render button, click and dispatch and action', () => {
    const store = mockStore();

    // check if button is present
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <ScreenOver />
        </Provider>,
        container
      );
    });
    const button = container?.querySelector('button');
    expect(button?.textContent).toBe('Play again!');

    // check click on button
    const clicked = button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(clicked).toBeTruthy();

    // check for dispatched actions
    const actions = store.getActions();
    const expectedPayload = [
      { type: 'game/resetGame', paylaod: undefined },
      { type: 'game/screenGame', paylaod: undefined },
    ];
    expect(actions).toEqual(expectedPayload);
  });
});
