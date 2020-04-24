import * as React from 'react';
import styled from 'styled-components';
import { gameSlice } from '~store';
import { useDispatch } from 'react-redux';
const {
  actions: { screenGame }
} = gameSlice;

const StyledScreenIntro = styled.div``;

export const ScreenIntro = ({}: {}) => {
  const dispatch = useDispatch();
  return (
    <StyledScreenIntro>
      <div style={{ height: 200 }} onClick={() => dispatch(screenGame())}>
        INTRO - Click here to start
      </div>
    </StyledScreenIntro>
  );
};
