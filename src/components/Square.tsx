import * as React from 'react';
import { TetroEnum } from '../game';
import styled from 'styled-components';

type Props = {
  t: TetroEnum;
  primary?: boolean;
};

const StyledSquare = styled.button<Props>`
  background: ${({ primary }) => (primary ? 'palevioletred' : 'white')};
  color: ${({ primary }) => (primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Square = ({ t }: Props) => <StyledSquare t={t} primary />;
