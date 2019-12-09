import * as React from 'react';
import { TetroEnum } from '../game';
import styled from 'styled-components';

const SquareMain = styled.div`
  background-color: red;
  width: 10px;
  height: 10px;
`;

export const Square = ({ t }: { t: TetroEnum }) => SquareMain;
