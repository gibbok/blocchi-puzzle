import React from 'react';
import { Tile } from './Tile';
import renderer from 'react-test-renderer';
import { TetroEnum, NoTetro } from '../game/types';

it('should render ScreenTransaction', () => {
  const tree = renderer.create(<Tile variant={TetroEnum.I} row={0} column={0} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render ScreenTransaction NoTetro', () => {
  const tree = renderer.create(<Tile variant={NoTetro} row={0} column={0} />).toJSON();
  expect(tree).toMatchSnapshot();
});
