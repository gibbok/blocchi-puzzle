import * as React from 'react';
import styled from 'styled-components';
import { Keyboard } from './Keyboard';
import { BoardContainer, NextContainer } from '~containers';

const StyledScreenGame = styled.div``;

export const ScreenGame = ({}: {}) => (
  <StyledScreenGame>
    <Keyboard />
    <div>
      <BoardContainer />
    </div>
    <div>
      <NextContainer />
    </div>
  </StyledScreenGame>
);
