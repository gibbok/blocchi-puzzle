import * as React from 'react';
import { ScreenEnum } from '../game/types';

type Props = Readonly<{
  current: ScreenEnum;
  intro: JSX.Element;
  game: JSX.Element;
  over: JSX.Element;
}>;

export function ScreenTransaction({ current, intro, game, over }: Props) {
  return current === ScreenEnum.Intro ? intro : current === ScreenEnum.Game ? game : over;
}
