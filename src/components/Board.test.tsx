import React from 'react';
import { Board } from './Board';
import renderer from 'react-test-renderer';
import { BOARD_FULL_S } from '../utils';

it('should render Board', () => {
  const tree = renderer.create(<Board board={BOARD_FULL_S} />).toJSON();
  expect(tree).toMatchSnapshot();
});
