import * as React from 'react';
import { ScreenEnum } from '~game/types';
import styled from 'styled-components';
import { ScreenIntro } from './ScreenIntro';
import { ScreenGame } from './ScreenGame';
import { ScreenOver } from './ScreenOver';
import { wood } from '../assets/images';

const StyledScreen = styled.div`
  background-image: url(${wood});
  width: 100vw;
  height: 100vh;
`;

// FIXME change to intro
export const Screen = ({ screen }: { screen: ScreenEnum }) => (
  <StyledScreen>
    {screen === ScreenEnum.Intro ? (
      <ScreenIntro />
    ) : screen === ScreenEnum.Game ? (
      <ScreenGame />
    ) : (
      <ScreenOver />
    )}
  </StyledScreen>
);
