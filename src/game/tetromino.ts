import { TetroEnum, Tetro, DirectionEnum, Board, Tile } from './types';
import { randomInt } from 'fp-ts/lib/Random';
import { IO, io } from 'fp-ts/lib/IO';
import { none, some, exists, Option } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
import { pieces } from './pieces';
import { BOARD_CELLS, BOARD_ROWS } from './settings';

export const getTetroFromPieces = (t: TetroEnum, d: DirectionEnum): Tetro => pieces[t][d];

export const getRandomTetro = (): IO<Tetro> => {
  const rndInt = randomInt(0, Object.keys(TetroEnum).length - 1)();
  const rndEnum = Object.keys(TetroEnum)[rndInt];
  return io.of(pieces[rndEnum as TetroEnum][DirectionEnum.N]);
};

export const eachblock = (
  t: TetroEnum,
  d: DirectionEnum,
  x: number,
  y: number,
  fn: (x: number, y: number) => boolean
) => {
  const tetro = getTetroFromPieces(t, d);
  const result = tetro.some((r, rIdx) => r.some((c, cIdx) => fn(cIdx + x, rIdx + y)));
  return result;
};

export const getBlock = (x: number, y: number, b: Board): Option<Tile> => {
  const r = b && b[y] ? some(b[y][x]) : none;
  // console.log(r);
  return r;
};

// export const getBlock = (x: number, y: number, b: Board): Option<Tile> =>
//   b && b[y] ? some(b[y][x]) : none;

export const occupied = (
  t: TetroEnum,
  d: DirectionEnum,
  x: number,
  y: number,
  b: Board
): boolean => {
  return eachblock(t, d, x, y, (x, y) => {
    const isTetroBlockAlredyOnBoard = pipe(
      getBlock(x, y, b),
      j => {
        // console.log('x', j);
        return j;
      },
      exists(a => {
        return a !== 0;
      })
    );
    const isInvalidPosX = x < 0 || x >= BOARD_CELLS;
    const isInvalidPosY = y < 0 || y >= BOARD_ROWS;
    return isInvalidPosX || isInvalidPosY || isTetroBlockAlredyOnBoard;
  });
};

export const rotateTetroDirectionCW = (d: DirectionEnum) => {
  const values = Object.values(DirectionEnum);
  const index = values.indexOf(d);
  const next = values[index + 1];
  const newDirection = next === undefined ? values[0] : next;
  return newDirection;
};
