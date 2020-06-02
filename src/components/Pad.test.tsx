import React from 'react';
import { Pad } from './Pad';
import renderer from 'react-test-renderer';
import { noop } from '../utils';

it('should render Pad', () => {
  const tree = renderer.create(<Pad icon="close" onClick={noop} />).toJSON();
  expect(tree).toMatchSnapshot();
});
