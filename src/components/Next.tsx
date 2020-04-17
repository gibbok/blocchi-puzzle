import * as React from 'react';
import { TetroDef } from '~game/types';
import styled from 'styled-components';
import { TILE_WIDTH } from '~game/settings';
import { Tile } from './Tile';
import { getTetroFromPieces } from '~game';

const SIZE_NEXT = 4;

const StyledNext = styled.div`
  display: grid;
  background-color: yellow;
  width: ${TILE_WIDTH * SIZE_NEXT}rem;
  height: ${TILE_WIDTH * SIZE_NEXT}rem;
  grid-template-rows: repeat(${SIZE_NEXT}, 1fr);
  grid-template-columns: repeat(${SIZE_NEXT}, 1fr);
`;

export const Next = ({ nextTetro }: { nextTetro: TetroDef }) => (
  <div>
    <StyledNext>
      {new Array(SIZE_NEXT).fill(0).map((rowB, rowIdxB) =>
        new Array(SIZE_NEXT).fill(0).map((_clmB: number, cmlIdxB: number) => {
          return (
            <div key={cmlIdxB}>
              {rowIdxB} / {cmlIdxB}
            </div>
          );
        })
      )}
      {/* {getTetroFromPieces(nextTetro.type, nextTetro.direction).map((row, rowX) =>
        row.map((tileVariant, idx) => (
          <Tile key={idx} variant={tileVariant} debug={{ y: rowX, x: idx }} />
        ))
      )} */}
    </StyledNext>
    {JSON.stringify(nextTetro)}
  </div>
);
