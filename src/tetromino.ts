import { TetroEnum, Tetro, DirectionEnum, Board, Cell } from './types';
import { randomInt } from 'fp-ts/lib/Random';
import { IO, io } from 'fp-ts/lib/IO';
import { none, some, exists, Option } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
import { pieces } from './pieces';
import { BOARD_CELLS, BOARD_ROWS } from './board';

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

export const getBlock = (x: number) => (y: number) => (b: Board): Option<Cell> =>
  b && b[y] ? some(b[y][x]) : none;

export const occupied = (t: TetroEnum) => (d: DirectionEnum) => (x: number) => (y: number) => (
  b: Board
): boolean =>
  eachblock(t, d, x, y, (x, y) => {
    const block = pipe(
      getBlock(x)(y)(b),
      exists(a => a !== 0)
    );
    const result = x < 0 || x >= BOARD_CELLS || y < 0 || y >= BOARD_ROWS || block ? true : false;
    console.log('block', block, 'result', result);
    return result;
  });
