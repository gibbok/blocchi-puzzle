import * as React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { gameSliceXXX } from '../store';
import { useDispatch } from 'react-redux';
import { ScoreContainer } from '../containers';

const {
  actions: { screenGame, resetGame },
} = gameSliceXXX;

const StyledScreenOver = styled.div`
  margin-top: -100%;
`;

const ButtonWrapper = styled.div`
  margin-top: 4rem;
`;

export const ScreenOver = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleClickPlay = () => {
    dispatch(resetGame());
    dispatch(screenGame());
  };

  return (
    <StyledScreenOver>
      <ScoreContainer />
      <ButtonWrapper>
        <Button onClick={handleClickPlay}>Play again!</Button>
      </ButtonWrapper>
    </StyledScreenOver>
  );
};
