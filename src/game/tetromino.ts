import { TetroEnum, Tetro, DirectionEnum, Board, Tile, NoTetro } from './types';
import { none, some, Option, fromNullable, getOrElse, map } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
import { IO, io } from 'fp-ts/lib/IO';
import { pieces } from '../game';
import { getRandomValueFromStringEnum } from '../utils/misc'; // FIXME: use index from utils

/**
 * Get data for tetromino.
 * @param t Tetromino type
 * @param d Tetromino direction
 */
export const getTetroFromPieces = (t: TetroEnum, d: DirectionEnum): Tetro => pieces[t][d];

/**
 * Get a random tetromino type.
 */
export const getRandomTetroEnum = (): IO<TetroEnum> => getRandomValueFromStringEnum(TetroEnum);

/**
 * Set tetromino centered horizontally with the board.
 * @param boardWidth Board size width
 * @param t Tetromino type
 * @param d Tetromino direction
 */
export const setTetroPositionXCenterBoard = (
  boardWidth: number,
  t: TetroEnum,
  d: DirectionEnum
): number => {
  const data = getTetroFromPieces(t, d);
  const tetroWidth = data[0].length;
  const posX = Math.floor((boardWidth - tetroWidth) / 2);
  return posX;
};

/**
 * Get a random tetromino data.
 */
export const getRandomTetro = (): IO<Tetro> => {
  const rndEnum = getRandomTetroEnum()();
  return io.of(pieces[rndEnum][DirectionEnum.N]);
};

/**
 *  Get a specific block from the board.
 * @param x Position x
 * @param y Position y
 * @param b Board to search
 */
export const getBlockFromBoard = (x: number, y: number, b: Board): Option<Tile> => {
  const r = b[y] ? some(b[y][x]) : none;
  return r;
};

/**
 * Get blocks hight.
 * @param blocks Board blocks
 */
export const getHeight = <T>(blocks: ReadonlyArray<T>): number => blocks.length - 1;

/**
 * Get blocks width.
 * @param blocks Board blocks
 */
export const getWidth = <T>(blocks: ReadonlyArray<ReadonlyArray<T>>): number =>
  pipe(
    fromNullable(blocks[0]),
    map((x) => x.length - 1),
    getOrElse(() => -1)
  );

/**
 * Check if position y fit within the board
 * @param y Position y
 * @param b Board
 */
export const isValidY = (y: number, b: Board): boolean => y >= 0 && y <= getHeight(b);

/**
 * Check if position x fit within the board
 * @param x Position x
 * @param b Board
 */
export const isValidX = (x: number, b: Board): boolean => x >= 0 && x <= getWidth(b);

/**
 * Check if tetromino fits in the board vertically.
 * @param y Tetromino position y
 * @param tetroHeight Tetromino height
 * @param boardHeight Board height
 */
const isValidHeight = (y: number, tetroHeight: number, boardHeight: number) =>
  y + tetroHeight <= boardHeight;

/**
 * Check if tetromino fit in the board horizzontally.
 * @param x Tetromino position x
 * @param tetroWidth Tetromino width
 * @param boardWidth Board width
 */
const isValidWidth = (x: number, tetroWidth: number, boardWidth: number) =>
  x + tetroWidth <= boardWidth;

/**
 * Check if tetromino fits within the board.
 * @param t Tetromino type
 * @param d Tetromino direction
 * @param x Tetromino position x
 * @param y Tetromino position y
 * @param b Board
 */
export const canTetroFitBoard = (
  t: TetroEnum,
  d: DirectionEnum,
  x: number,
  y: number,
  b: Board
): boolean => {
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

/**
 * Check if tetromino fits into the board and does not touch other tetrominoes.
 * @param t Tetromino type
 * @param d Tetromino direction
 * @param x Tetromino position x
 * @param y Tetromino position y
 * @param b Board
 */
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

/**
 * Get next direction from tetromino clockwise.
 * @param d Tetromino direction
 */
export const rotateTetroDirectionCW = (d: DirectionEnum): DirectionEnum => {
  const values = Object.values(DirectionEnum);
  const index = values.indexOf(d);
  return pipe(
    fromNullable(values[index + 1]),
    getOrElse(() => values[0])
  );
};
