import * as React from 'react';
import { Board as BoardType } from '../game/types';
import styled from 'styled-components';
import { BOARD_CELLS, BOARD_ROWS, TILE_WIDTH, TILE_COLOR_NOTETRO } from '../game/settings';
import { Tile } from './Tile';

const BoardStyled = styled.div`
  display: grid;
  width: ${TILE_WIDTH * BOARD_CELLS}rem;
  height: ${TILE_WIDTH * BOARD_ROWS}rem;
  grid-template-rows: repeat(${BOARD_ROWS}, 1fr);
  grid-template-columns: repeat(${BOARD_CELLS}, 1fr);
  align-items: center;
  justify-items: center;
  grid-gap: 2px;
  background-color: ${TILE_COLOR_NOTETRO};
  box-shadow: inset 0px 2px 30px 10px rgba(0, 0, 0, 0.5);
`;

const Frame = styled.div`
  background-color: #210e08;
  border: solid 2vmin #eee;
  border-bottom-color: #765039;
  border-left-color: #412013;
  border-radius: 2px;
  border-right-color: #39190e;
  border-top-color: #583b27;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset, 0 5px 10px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: inline-block;
  padding: 0.5vmin;
  position: relative;
  text-align: center;
  &:before {
    border-radius: 2px;
    bottom: -0.5vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;
    content: '';
    left: -0.5vmin;
    position: absolute;
    right: -0.5vmin;
    top: -0.5vmin;
  }
  &:after {
    border-radius: 2px;
    bottom: -0.5vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
    content: '';
    left: -0.5vmin;
    position: absolute;
    right: -0.5vmin;
    top: -0.5vmin;
  }
`;

export const Board = ({ board }: { board: BoardType }) => (
  <Frame>
    <BoardStyled>
      {board.map(row => row.map((tileVariant, idx) => <Tile key={idx} variant={tileVariant} />))}
    </BoardStyled>
  </Frame>
);
