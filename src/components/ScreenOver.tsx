import * as React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { gameSlice } from '../store';
import { useDispatch } from 'react-redux';

const {
  actions: { screenGame, resetGame }
} = gameSlice;

const StyledScreenOver = styled.div``;

export const ScreenOver = ({}: {}) => {
  const dispatch = useDispatch();

  const handleClickPlay = () => {
    dispatch(resetGame());
    dispatch(screenGame());
  };

  return (
    <StyledScreenOver>
      Your score:
      <Button onClick={handleClickPlay}>Play again!</Button>
    </StyledScreenOver>
  );
};
