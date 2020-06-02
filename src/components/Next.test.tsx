import React from 'react';
import { Next } from './Next';
import renderer from 'react-test-renderer';
import { TetroEnum, DirectionEnum } from '../game/types';

it('should render Next', () => {
  const tree = renderer.create(<Next type={TetroEnum.I} direction={DirectionEnum.E} />).toJSON();
  expect(tree).toMatchSnapshot();
});
