import React from 'react';
import { Button } from './Button';
import renderer from 'react-test-renderer';
import { noop } from '../utils';

it('should render Button', () => {
  const tree = renderer.create(<Button onClick={noop}>Button</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
