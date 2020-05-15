import * as React from 'react';
import styled from 'styled-components';
import { Keyboard } from './Keyboard';
import { BoardContainer, NextContainer, InfoContainer } from '../containers';
import { GameLoopContainer } from '../containers/GameLoopContainer';

const ScreenGameStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const Status = styled.div`
  margin-top: 4rem;
  margin-left: 4rem;
`;

export const ScreenGame = ({}: {}) => (
  <>
    <GameLoopContainer />
    <Keyboard />
    <ScreenGameStyled>
      <BoardContainer />
      <Status>
        <NextContainer />
        <InfoContainer />
      </Status>
    </ScreenGameStyled>
  </>
);
