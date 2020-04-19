import * as React from 'react';
import styled from 'styled-components';
import { Keyboard } from './Keyboard';
import { BoardContainer, NextContainer, InfoContainer } from '~containers';
import { GameLoop } from './GameLoop';

const StyledScreenGame = styled.div`
  display: flex;
`;

export const ScreenGame = ({}: {}) => (
  <StyledScreenGame>
    <GameLoop />
    <Keyboard />
    <BoardContainer />
    <div>
      <NextContainer />
      <InfoContainer />
    </div>
  </StyledScreenGame>
);
