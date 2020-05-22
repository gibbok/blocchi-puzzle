import * as React from 'react';
import styled from 'styled-components';
import { Keyboard } from './Keyboard';
import { BoardContainer, NextContainer, InfoContainer } from '../containers';
import { GameLoopContainer } from '../containers/GameLoopContainer';
import { detectorKeyRepeat } from './detectorKeyRepeat';
import { Navigation } from './Navigation';

const ScreenGameStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const Status = styled.div`
  margin-top: 4rem;
  margin-left: 4rem;
`;

const Board = styled.div``;

export const ScreenGame = ({}: {}) => (
  <>
    <GameLoopContainer detectionKeyRepeat={detectorKeyRepeat} />
    <Keyboard detectionKeyRepeat={detectorKeyRepeat} />
    <ScreenGameStyled>
      <Board>
        <BoardContainer />
        <Navigation
          onClickLeft={console.log}
          onClickRight={console.log}
          onClickDown={console.log}
          onClickRotate={console.log}
        />
      </Board>
      <Status>
        <NextContainer />
        <InfoContainer />
      </Status>
    </ScreenGameStyled>
  </>
);
