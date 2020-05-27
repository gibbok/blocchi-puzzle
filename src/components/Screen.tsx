import * as React from 'react';
import { ScreenEnum } from '../game/types';
import styled from 'styled-components';
import { ScreenIntro } from './ScreenIntro';
import { ScreenGame } from './ScreenGame';
import { ScreenOver } from './ScreenOver';
import { wood } from '../assets/images';
import { ScreenTransaction } from '../components/ScreenTransaction';
import { PaletteEnum } from '../game/settings';

const StyledScreen = styled.div`
  background-color: ${PaletteEnum.Tan};
  background-image: url(${wood});
  width: 100vw;
  height: 100vh;
  box-shadow: inset 0 0 4rem 0 rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: -5rem;
`;

export const Screen = ({ screen }: { screen: ScreenEnum }): JSX.Element => (
  <StyledScreen>
    <ScreenTransaction
      current={screen}
      intro={<ScreenIntro />}
      game={<ScreenGame />}
      over={<ScreenOver />}
    />
  </StyledScreen>
);
