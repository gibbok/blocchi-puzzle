import React from 'react';
import { App } from './App';
import renderer from 'react-test-renderer';

describe('<App />', () => {
  it('should render', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
