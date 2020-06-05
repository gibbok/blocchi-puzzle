import React from 'react';
import renderer from 'react-test-renderer';
import { mockStore } from '../utils';
import { Provider } from 'react-redux';
import { ScreenIntro } from './ScreenIntro';
import { Button } from './Button';

describe('<ScreenIntro />', () => {
  const store = mockStore();
  const tree = renderer.create(
    <Provider store={store}>
      <ScreenIntro />
    </Provider>
  );
  const instance = tree.root;

  it('should render', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should dispatch screenGame when click on button', () => {
    const button = instance.findByType(Button);
    button.props.onClick();

    const actions = store.getActions();
    const expectedPayload = [{ payload: undefined, type: 'game/screenGame' }];

    expect(actions).toEqual(expectedPayload);
  });
});
