import { TetroEnum, Tetro, DirectionEnum, Board, Tile } from './types';
import { randomInt } from 'fp-ts/lib/Random';
import { IO, io } from 'fp-ts/lib/IO';
import { none, some, exists, Option, getOrElse } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
import { pieces } from './pieces';
import { BOARD_CELLS, BOARD_ROWS } from './settings';

export const getTetroFromPieces = (t: TetroEnum, d: DirectionEnum): Tetro => pieces[t][d];

export const getRandomTetro = (): IO<Tetro> => {
  const rndInt = randomInt(0, Object.keys(TetroEnum).length - 1)();
  const rndEnum = Object.keys(TetroEnum)[rndInt];
  return io.of(pieces[rndEnum as TetroEnum][DirectionEnum.N]);
};

// I need to see if item is in the board and compare with the same position of item in the tetro,
// because if tetro is `0` and board is `I` is actually not occupied

// export const eachblock = (
//   t: TetroEnum,
//   d: DirectionEnum,
//   x: number,
//   y: number,
//   fn: (x: number, y: number) => boolean
// ) => {
//   const tetro = getTetroFromPieces(t, d);
//   const result = tetro.some((r, rIdx) => r.some((c, cIdx) => fn(cIdx + x, rIdx + y)));
//   return result;
// };

export const getBlockFromBoard = (x: number, y: number, b: Board): Option<Tile> => {
  const r = b && b[y] ? some(b[y][x]) : none;
  return r;
};

// export const getBlockFromTetro = (x: number, y: number, t: TetroEnum, d: DirectionEnum) => {
//   const tetro = getTetroFromPieces(t, d);
//   const r = tetro && tetro[y] ? some(tetro[y][x]) : none;
//   return r;
// };

export const occupied = (
  t: TetroEnum,
  d: DirectionEnum,
  x: number,
  y: number,
  b: Board
): boolean => {
  // take current tetro data
  const tetroBlocks = getTetroFromPieces(t, d);

  const isInvalidPosX = x < 0 || x >= BOARD_CELLS;
  const isInvalidPosY = y < 0 || y >= BOARD_ROWS;

  if (isInvalidPosX || isInvalidPosY) {
    return true;
  }

  const doesTetroCollideOnBoard = tetroBlocks.some((tetroRow, tetroRowIdx) => {
    const resultTetroRow = tetroRow.some((tetroCell, tetroCellIdx) => {
      const futureBoardTetroY = y + tetroRowIdx;
      const futureBoardTetroX = x + tetroCellIdx;
      const isInvalidPosY = futureBoardTetroY >= BOARD_ROWS;
      const isInvalidPosX = futureBoardTetroX >= BOARD_CELLS;

      if (isInvalidPosX || isInvalidPosY) {
        return true;
      }

      const futureBoardCell = b[futureBoardTetroY][futureBoardTetroX];
      const hasTetroCellValue = tetroCell !== 0;
      const hasFutureBoardCellValue = futureBoardCell !== 0;
      if (hasTetroCellValue && hasFutureBoardCellValue) {
        return true;
      } else if (!hasTetroCellValue && hasFutureBoardCellValue) {
        return false;
      } else if (hasTetroCellValue && !hasFutureBoardCellValue) {
        return false;
      } else {
        return false;
      }
    });
    return resultTetroRow;
  });

  return isInvalidPosX || isInvalidPosY || doesTetroCollideOnBoard;
};

export const rotateTetroDirectionCW = (d: DirectionEnum) => {
  const values = Object.values(DirectionEnum);
  const index = values.indexOf(d);
  const next = values[index + 1];
  const newDirection = next === undefined ? values[0] : next;
  return newDirection;
};
