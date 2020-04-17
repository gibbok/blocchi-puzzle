import * as React from 'react';
import { TetroDef, NoTetro } from '~game/types';
import styled from 'styled-components';
import { TILE_WIDTH } from '~game/settings';
import { Tile } from './Tile';
import { getTetroFromPieces } from '~game';

const SIZE_NEXT_BOARD = 4;

const StyledNext = styled.div`
  display: grid;
  background-color: white;
  width: ${TILE_WIDTH * SIZE_NEXT_BOARD}rem;
  height: ${TILE_WIDTH * SIZE_NEXT_BOARD}rem;
  grid-template-rows: repeat(${SIZE_NEXT_BOARD}, 1fr);
  grid-template-columns: repeat(${SIZE_NEXT_BOARD}, 1fr);
`;

const EmptyTile = styled.div``;

export const Next = ({ nextTetro }: { nextTetro: TetroDef }) => (
  <StyledNext>
    {new Array(SIZE_NEXT_BOARD).fill(0).map((_rowB, rowIdxB) =>
      new Array(SIZE_NEXT_BOARD).fill(0).map((_cellB: number, cellIdxB: number) => {
        const tetro = getTetroFromPieces(nextTetro.type, nextTetro.direction);
        const hasPiece = tetro[rowIdxB] !== undefined && tetro[cellIdxB] !== undefined;
        if (hasPiece) {
          const piece = tetro[rowIdxB][cellIdxB];
          const isPieceTetro = piece !== NoTetro;
          if (isPieceTetro) {
            return <Tile key={cellIdxB} variant={piece} />;
          } else {
            return <EmptyTile key={cellIdxB} />;
          }
        } else {
          return <EmptyTile key={cellIdxB} />;
        }
      })
    )}
  </StyledNext>
);
