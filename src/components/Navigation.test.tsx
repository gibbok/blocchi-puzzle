import React from 'react';
import { Navigation } from './Navigation';
import renderer from 'react-test-renderer';
import { noop } from '../utils';

it('should render Navigation', () => {
  const tree = renderer
    .create(
      <Navigation onClickLeft={noop} onClickRight={noop} onClickDown={noop} onClickRotate={noop} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
