import renderer from 'react-test-renderer';
import { BrowserNotSupported } from './BrowserNotSupported';
import React from 'react';

describe('<BrowserNotSupported />', () => {
  it('should render', () => {
    const tree = renderer.create(<BrowserNotSupported />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
