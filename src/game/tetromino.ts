import { TetroEnum, Tetro, DirectionEnum, Board, Tile, NoTetro } from './types';
import { none, some, Option, fromNullable, getOrElse, map } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
import { IO, io } from 'fp-ts/lib/IO';
import { pieces } from '~game';
import { getRandomValueFromStringEnum } from '~utils/misc'; // FIXME: use index from utils

export const getTetroFromPieces = (t: TetroEnum, d: DirectionEnum): Tetro => pieces[t][d];

export const getRandomTetroEnum = (): IO<TetroEnum> => getRandomValueFromStringEnum(TetroEnum);

export const setTetroPositionXCenterBoard = (
  boardWidth: number,
  t: TetroEnum,
  d: DirectionEnum
) => {
  const data = getTetroFromPieces(t, d);
  const tetroWidth = data[0].length;
  const posX = Math.floor((boardWidth - tetroWidth) / 2);
  return posX;
};

export const getRandomTetro = (): IO<Tetro> => {
  const rndEnum = getRandomTetroEnum()();
  return io.of(pieces[rndEnum][DirectionEnum.N]);
};

export const getBlockFromBoard = (x: number, y: number, b: Board): Option<Tile> => {
  const r = b[y] ? some(b[y][x]) : none;
  return r;
};

export const getHeight = <T>(blocks: ReadonlyArray<T>): number => blocks.length - 1;

export const getWidth = <T>(blocks: ReadonlyArray<ReadonlyArray<T>>): number =>
  pipe(
    fromNullable(blocks[0]),
    map(x => x.length - 1),
    getOrElse(() => -1)
  );

const isValidY = (y: number, b: Board): boolean => y >= 0 && y <= getHeight(b);

const isValidX = (x: number, b: Board): boolean => x >= 0 && x <= getWidth(b);

const isValidHeight = (y: number, tetroHeight: number, boardHeight: number) =>
  y + tetroHeight <= boardHeight;

const isValidWidth = (x: number, tetroWidth: number, boardWidth: number) =>
  x + tetroWidth <= boardWidth;

export const canTetroFitBoard = (
  t: TetroEnum,
  d: DirectionEnum,
  x: number,
  y: number,
  b: Board
) => {
  const tetroBlocks = getTetroFromPieces(t, d);
  const tetroHeight = getHeight(tetroBlocks);
  const tetroWidth = getWidth(tetroBlocks);
  const boardHeight = getHeight(b);
  const boardWidth = getWidth(b);

  return (
    isValidY(y, b) &&
    isValidX(x, b) &&
    isValidHeight(y, tetroHeight, boardHeight) &&
    isValidWidth(x, tetroWidth, boardWidth)
  );
};

export const isOccupied = (
  t: TetroEnum,
  d: DirectionEnum,
  x: number,
  y: number,
  b: Board
): boolean => {
  const canFit = canTetroFitBoard(t, d, x, y, b);
  if (!canFit) {
    return true;
  }

  const hasCollisionWithBoard = getTetroFromPieces(t, d).some((tetroRow, tetroRowIdx) => {
    const resultTetroRow = tetroRow.some((tetroCell, tetroCellIdx) => {
      const futureBoardTetroY = y + tetroRowIdx;
      const futureBoardTetroX = x + tetroCellIdx;
      const futureBoardCell = b[futureBoardTetroY][futureBoardTetroX];
      const hasTetroCellValue = tetroCell !== NoTetro;
      const hasFutureBoardCellValue = futureBoardCell !== NoTetro;
      return hasTetroCellValue && hasFutureBoardCellValue;
    });
    return resultTetroRow;
  });
  return hasCollisionWithBoard;
};

export const rotateTetroDirectionCW = (d: DirectionEnum) => {
  const values = Object.values(DirectionEnum);
  const index = values.indexOf(d);
  return pipe(
    fromNullable(values[index + 1]),
    getOrElse(() => values[0])
  );
};
