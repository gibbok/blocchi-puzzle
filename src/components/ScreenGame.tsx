import * as React from 'react';
import styled from 'styled-components';
import { Keyboard } from './Keyboard';
import { BoardContainer, NextContainer, InfoContainer } from '../containers';
import { GameLoopContainer } from '../containers/GameLoopContainer';
import { detectorKeyRepeat } from './detectorKeyRepeat';
import { Navigation } from './Navigation';
import { useDispatch } from 'react-redux';
import { moveDownThunk } from '../store/board/actions/thunks';
import { gameSlice } from '../store';
import { mq, mq_o } from '../game/settings';

const {
  actions: { moveLeft, moveUp, moveRight },
} = gameSlice;

const ScreenGameStyled = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  ${mq_o.l} {
  }
  ${mq_o.p} {
  }
`;

const Status = styled.div`
  /* margin-top: 4vmin;
  margin-left: 4vmin; */
`;

const Board = styled.div``;

export const ScreenGame = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <>
      <GameLoopContainer detectionKeyRepeat={detectorKeyRepeat} />
      <Keyboard detectionKeyRepeat={detectorKeyRepeat} />
      <ScreenGameStyled>
        <Board>
          <BoardContainer />
        </Board>
        <Status>
          <NextContainer />
          <InfoContainer />
          <Navigation
            onClickLeft={() => dispatch(moveLeft())}
            onClickRight={() => dispatch(moveRight())}
            onClickDown={() => dispatch(moveDownThunk())}
            onClickRotate={() => dispatch(moveUp())}
          />
        </Status>
      </ScreenGameStyled>
    </>
  );
};
