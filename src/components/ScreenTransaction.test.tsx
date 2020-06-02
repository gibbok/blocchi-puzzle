import React from 'react';
import { ScreenTransaction } from './ScreenTransaction';
import renderer from 'react-test-renderer';
import { ScreenEnum } from '../game/types';

it('should render ScreenTransaction Intro', () => {
  const tree = renderer
    .create(
      <ScreenTransaction
        current={ScreenEnum.Intro}
        intro={<div>intro</div>}
        game={<div>game</div>}
        over={<div>over</div>}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render ScreenTransaction Game', () => {
  const tree = renderer
    .create(
      <ScreenTransaction
        current={ScreenEnum.Game}
        intro={<div>intro</div>}
        game={<div>game</div>}
        over={<div>over</div>}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render ScreenTransaction Over', () => {
  const tree = renderer
    .create(
      <ScreenTransaction
        current={ScreenEnum.Over}
        intro={<div>intro</div>}
        game={<div>game</div>}
        over={<div>over</div>}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
