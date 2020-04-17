import * as React from 'react';
import styled from 'styled-components';
import { Keyboard } from './Keyboard';
import { BoardContainer, NextContainer, InfoContainer } from '~containers';

const StyledScreenGame = styled.div`
  display: flex;
`;

export const ScreenGame = ({}: {}) => (
  <StyledScreenGame>
    <Keyboard />
    <BoardContainer />
    <div>
      <NextContainer />
      <InfoContainer />
    </div>
  </StyledScreenGame>
);
