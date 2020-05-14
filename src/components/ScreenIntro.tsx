import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { gameSlice } from '~store';
import { useDispatch } from 'react-redux';
import { Logo } from '../assets/Logo';
import { Button } from './Button';

const {
  actions: { screenGame }
} = gameSlice;

const ScreenIntroStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const rotate = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ButtonWrapper = styled.div`
  opacity: 0;
  margin-top: 4rem;
  animation: ${rotate} 2s linear 3s normal forwards;
`;

export const ScreenIntro = ({}: {}) => {
  const dispatch = useDispatch();
  return (
    <ScreenIntroStyled>
      <Logo />
      <ButtonWrapper>
        <Button onClick={() => dispatch(screenGame())}>Play!</Button>
      </ButtonWrapper>
    </ScreenIntroStyled>
  );
};
