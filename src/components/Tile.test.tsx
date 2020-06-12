import React from 'react';
import { Tile } from './Tile';
import renderer from 'react-test-renderer';
import { TetroEnum, NoTetro } from '../game/types';

it('should render ScreenTransaction', () => {
  const tree = renderer.create(<Tile variant={TetroEnum.I} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render ScreenTransaction NoTetro', () => {
  const tree = renderer.create(<Tile variant={NoTetro} />).toJSON();
  expect(tree).toMatchSnapshot();
});
