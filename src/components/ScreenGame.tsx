import * as React from 'react';
import styled from 'styled-components';
import { Keyboard } from './Keyboard';
import { BoardContainer, NextContainer, InfoContainer } from '~containers';
import { GameLoopContainer } from '~containers/GameLoopContainer';

const ScreenGameStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const ScreenGame = ({}: {}) => (
  <ScreenGameStyled>
    <GameLoopContainer />
    <Keyboard />
    <BoardContainer />
    <div>
      <NextContainer />
      <InfoContainer />
    </div>
  </ScreenGameStyled>
);
