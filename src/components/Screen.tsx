import * as React from 'react';
import { ScreenEnum } from '~game/types';
import styled from 'styled-components';
import { ScreenIntro } from './ScreenIntro';
import { ScreenGame } from './ScreenGame';
import { ScreenOver } from './ScreenOver';

const StyledScreen = styled.div`
  background-color: red;
`;

// FIXME change to intro
export const Screen = ({ screen }: { screen: ScreenEnum }) => (
  <StyledScreen>
    {console.log('SCREEN', screen)}
    {screen === ScreenEnum.Intro ? (
      <ScreenIntro />
    ) : screen === ScreenEnum.Game ? (
      <ScreenGame />
    ) : (
      <ScreenOver />
    )}
  </StyledScreen>
);
