import * as React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { gameSlice } from '../store';
import { useDispatch } from 'react-redux';
import { ScoreContainer } from '../containers';

const {
  actions: { screenGame, resetGame },
} = gameSlice;

const ScreenOverStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  margin-top: 3.5vmin;
`;

export const ScreenOver = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleClickPlay = () => {
    dispatch(resetGame());
    dispatch(screenGame());
  };

  return (
    <ScreenOverStyled>
      <ScoreContainer />
      <ButtonWrapper>
        <Button onClick={handleClickPlay}>Play again!</Button>
      </ButtonWrapper>
    </ScreenOverStyled>
  );
};
