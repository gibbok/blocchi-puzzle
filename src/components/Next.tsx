import * as React from 'react';
import { TetroDef, NoTetro } from '~game/types';
import styled from 'styled-components';
import { TILE_WIDTH } from '~game/settings';
import { Tile } from './Tile';
import { getTetroFromPieces } from '~game';

const SIZE_NEXT = 4;

const StyledNext = styled.div`
  display: grid;
  background-color: white;
  width: ${TILE_WIDTH * SIZE_NEXT}rem;
  height: ${TILE_WIDTH * SIZE_NEXT}rem;
  grid-template-rows: repeat(${SIZE_NEXT}, 1fr);
  grid-template-columns: repeat(${SIZE_NEXT}, 1fr);
`;

const EmptyTile = styled.div``;

export const Next = ({ nextTetro }: { nextTetro: TetroDef }) => (
  <div>
    <StyledNext>
      {new Array(SIZE_NEXT).fill(0).map((rowB, rowIdxB) =>
        new Array(SIZE_NEXT).fill(0).map((_clmB: number, cmlIdxB: number) => {
          const tetro = getTetroFromPieces(nextTetro.type, nextTetro.direction);
          const hasPiece = tetro[rowIdxB] !== undefined && tetro[cmlIdxB] !== undefined;
          if (hasPiece) {
            const piece = tetro[rowIdxB][cmlIdxB];
            const hasPieceInTetro = piece !== NoTetro;
            if (hasPieceInTetro) {
              return <Tile key={cmlIdxB} variant={piece} />;
            } else {
              return <EmptyTile key={cmlIdxB} />;
            }
          } else {
            return <EmptyTile key={cmlIdxB} />;
          }
        })
      )}
    </StyledNext>
    {JSON.stringify(nextTetro)}
  </div>
);
