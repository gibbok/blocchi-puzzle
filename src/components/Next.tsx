import * as React from 'react';
import { TetroDef } from '~game/types';
import styled from 'styled-components';

const StyledNext = styled.div`
  background-color: yellow;
`;

export const Next = ({ nextTetro }: { nextTetro: TetroDef }) => (
  <StyledNext>{JSON.stringify(nextTetro)}</StyledNext>
);
