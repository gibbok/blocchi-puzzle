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

const {
  actions: { moveLeft, moveUp, moveRight },
} = gameSlice;

const ScreenGameElm = styled.div.attrs({
  'data-test': 'screen-game',
});

const ScreenGameStyled = ScreenGameElm`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2rem;
  height: 100%;
`;

const Status = styled.div``;

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
