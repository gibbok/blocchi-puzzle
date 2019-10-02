import { TetroEnum, Tetro, DirectionEnum, Board, Block } from './types';
import { randomInt } from 'fp-ts/lib/Random';
import { IO, io } from 'fp-ts/lib/IO';
import { none, some, exists, Option } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
import { pieces } from './pieces';
import { TOT_BOARD_CELLS, TOT_BOARD_ROWS } from './board';

export const getTetroFromPieces = (t: TetroEnum) => (d: DirectionEnum): Tetro => pieces[t][d];

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
  const tetro = getTetroFromPieces(t)(d);
  const result = tetro.some((r, rIdx) => r.some((c, cIdx) => fn(cIdx + x, rIdx + y)));
  return result;
};

export const getBlock = (x: number) => (y: number) => (b: Board): Option<Block> =>
  b && b[y] ? some(b[y][x]) : none;

export const occupied = (t: TetroEnum) => (d: DirectionEnum) => (x: number) => (y: number) => (
  b: Board
): boolean =>
  eachblock(t, d, x, y, (x, y) => {
    const isTetroBlockAlredyOnBoard = pipe(
      getBlock(x)(y)(b),
      exists(a => a !== 0)
    );
    const isInvalidPosX = x < 0 || x >= TOT_BOARD_CELLS;
    const isInvalidPosY = y < 0 || y >= TOT_BOARD_ROWS;
    return isInvalidPosX || isInvalidPosY || isTetroBlockAlredyOnBoard;
  });

export const rotateTetroACW = (t: TetroEnum) => {
  const values = Object.values(TetroEnum);
  const i = values.indexOf(t);
  const n = values[i - 1] !== undefined ? values[i - 1] : values[values.length - 1];
  return n;
};
