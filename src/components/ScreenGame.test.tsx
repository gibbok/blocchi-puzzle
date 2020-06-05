import renderer from 'react-test-renderer';
import React from 'react';
import { ScreenGame } from './ScreenGame';
import { mockStore } from '../utils';
import { Provider } from 'react-redux';

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
});
