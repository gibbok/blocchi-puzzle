import * as React from 'react';
import { Board as BoardType } from '../game';
import { Tile } from './Tile';
import styled from 'styled-components';
import { BOARD_CELLS, BOARD_ROWS, TILE_WIDTH } from '../game/settings';

const StyledBoard = styled.div`
  display: grid;
  background-color: darkgray;
  width: ${TILE_WIDTH * BOARD_CELLS}rem;
  height: ${TILE_WIDTH * BOARD_ROWS}rem;
  grid-template-rows: repeat(${BOARD_ROWS}, 1fr);
  grid-template-columns: repeat(${BOARD_CELLS}, 1fr);
  align-items: center;
  justify-items: center;
`;

export const Board = ({ board }: { board: BoardType }) => (
  <StyledBoard>
    {board.map(row => row.map((tileVariant, idx) => <Tile key={idx} variant={tileVariant} />))}
  </StyledBoard>
);
