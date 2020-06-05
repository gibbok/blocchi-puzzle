import { ScreenOver } from './ScreenOver';
import renderer from 'react-test-renderer';
import React from 'react';
import { mockStore } from '../utils';
import { Provider } from 'react-redux';

describe('ScreenOver', () => {
  it('should render', () => {
    const store = mockStore();
    const tree = renderer
      .create(
        <Provider store={store}>
          <ScreenOver />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
