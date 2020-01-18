import * as React from 'react';
import styled from 'styled-components';
import { BoardContainer } from '~containers';
import { Keyboard } from './Keyboard';

const StyledScreenGame = styled.div``;

export const ScreenGame = ({}: {}) => (
  <StyledScreenGame>
    <Keyboard />
    <BoardContainer />
  </StyledScreenGame>
);
