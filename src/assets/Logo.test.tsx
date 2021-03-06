import React from 'react';
import { Logo } from './Logo';
import renderer from 'react-test-renderer';

describe('<Logo />', () => {
  jest.useFakeTimers();
  it('should render Logo', async () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
