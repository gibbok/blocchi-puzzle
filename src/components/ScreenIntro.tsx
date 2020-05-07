import * as React from 'react';
import styled from 'styled-components';
import { gameSlice } from '~store';
import { useDispatch } from 'react-redux';
const {
  actions: { screenGame }
} = gameSlice;

const ScreenIntroStyled = styled.div``;

export const ScreenIntro = ({}: {}) => {
  const dispatch = useDispatch();
  return (
    <ScreenIntroStyled>
      <div onClick={() => dispatch(screenGame())}>INTRO - Click here to start</div>
    </ScreenIntroStyled>
  );
};
