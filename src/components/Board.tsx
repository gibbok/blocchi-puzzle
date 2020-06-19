import * as React from 'react';
import { Board as BoardType, Tile as TileType } from '../game/types';
import styled from 'styled-components';
import { BOARD_CELLS, BOARD_ROWS, TILE_COLOR_NOTETRO, mq_o, mq } from '../game/settings';
import { Tile } from './Tile';

const BoardElm = styled.div.attrs({
  'data-test': 'board',
});

const BoardStyled = BoardElm`
  display: grid;
  width: 40vmin;
  height: 80vmin;
  grid-template-rows: repeat(${BOARD_ROWS}, 1fr);
  grid-template-columns: repeat(${BOARD_CELLS}, 1fr);
  align-items: center;
  justify-items: center;
  grid-gap: 0.2rem;
  background-color: ${TILE_COLOR_NOTETRO};
  box-shadow: inset 0 0.2rem 3rem 1rem rgba(0, 0, 0, 0.5);
  ${mq_o.l} {
    width: 45vmin;
    height: 90vmin;
  }
  ${mq_o.p} {
    width: 45vmax;
    height: 90vmax;
    ${mq.sm} {
      width: 25vmax;
      height: 50vmax;
    }
  }
`;

const Frame = styled.div`
  background-color: #210e08;
  border: solid 2vmin #eee;
  border-bottom-color: #765039;
  border-left-color: #412013;
  border-radius: 0.2rem;
  border-right-color: #39190e;
  border-top-color: #583b27;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.25) inset, 0 0.5rem 1rem 0.5rem rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: inline-block;
  padding: 0.5vmin;
  position: relative;
  text-align: center;
  &:before {
    position: absolute;
    top: -1vmin;
    right: -1vmin;
    bottom: -1vmin;
    left: -1vmin;
    border-radius: 0.2rem;
    box-shadow: 0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.25) inset;
    content: '';
  }
  &:after {
    top: -1vmin;
    right: -1vmin;
    bottom: -1vmin;
    left: -1vmin;
    position: absolute;
    border-radius: 0.2rem;
    box-shadow: 0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.25);
    content: '';
  }
`;

const renderTileMemo = (variant: TileType, idx: number) =>
  React.useMemo(() => <Tile key={idx} variant={variant} />, [variant]);

export function Board({ board }: { board: BoardType }): JSX.Element {
  return (
    <Frame>
      <BoardStyled>
        {board.map((row) => row.map((tileVariant, idx) => renderTileMemo(tileVariant, idx)))}
      </BoardStyled>
    </Frame>
  );
}
