import * as React from 'react';
import styled from 'styled-components';
import { ScreenEnum } from '../game/types';

type Props = Readonly<{
  current: ScreenEnum;
  intro: JSX.Element;
  game: JSX.Element;
  over: JSX.Element;
}>;

const Wrapper = styled.div<{ active?: boolean }>`
  display: ${p => (p.active ? 'initial' : 'none')};
`;

export function ScreenTransaction({ current, intro, game, over }: Props) {
  const state = {
    [ScreenEnum.Intro]: current === ScreenEnum.Intro ? true : false,
    [ScreenEnum.Game]: current === ScreenEnum.Game ? true : false,
    [ScreenEnum.Over]: current === ScreenEnum.Over ? true : false
  };

  return (
    <>
      <Wrapper active={state[ScreenEnum.Intro]}>{intro}</Wrapper>
      <Wrapper active={state[ScreenEnum.Game]}>{game}</Wrapper>
      <Wrapper active={state[ScreenEnum.Over]}>{over}</Wrapper>
    </>
  );
}
