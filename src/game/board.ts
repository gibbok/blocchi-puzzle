import { Board, Tile, TetroEnum, DirectionEnum, NoTetro, BoardRow, BoardMutable } from './types';
import { getTetroFromPieces, isOccupied } from './tetromino';
import { pipe } from 'fp-ts/lib/pipeable';
import { BOARD_CELLS } from './settings';

/**
 * Create an empty board.
 * @param rows Number of rows
 * @param columns Number of columns
 */
export const mkEmptyBoard = (rows: number, columns: number): Board =>
  [...Array(rows)].fill([...Array(columns).fill(NoTetro)]);

/**
 * Copy a new board.
 * @param Original board
 */
export const copyBoard = (b: Board): BoardMutable => b.map((r) => r.map((c) => c));

/**
 * Add a tetromino to a board.
 * @param t Tetromino type
 * @param d Tetromino direction
 * @param x Tetromino x position on board
 * @param y Tetromino y position on board
 * @param b Board where to add the tetromino
 */
export const addTetroToBoard = (
  t: TetroEnum,
  d: DirectionEnum,
  x: number,
  y: number,
  b: Board
): Board => {
  const tetro = getTetroFromPieces(t, d);
  const bn = copyBoard(b);
  tetro.forEach((tR, tRx) =>
    tR.forEach(
      (tC, tCx) =>
        (bn[tRx + y][tCx + x] = tetro[tRx][tCx] !== 0 ? tetro[tRx][tCx] : bn[tRx + y][tCx + x])
    )
  );
  return bn;
};

/**
 * Recursivelly find an available position on board.
 * @param type Tetromino type
 * @param d Tetromino direction
 * @param x Tetromino current x position on board
 * @param y Tetromino current y position on board
 * @param b Board
 * @param towardsX Position x to check
 * @param towardsY Position y to check
 */
export const recFindAvailablePos = (
  type: TetroEnum,
  d: DirectionEnum,
  x: number,
  y: number,
  b: Board,
  towardsX: number,
  towardsY: number
): number => {
  const occupied = isOccupied(type, d, x, y, b);
  return occupied && y !== 0
    ? recFindAvailablePos(type, d, x - towardsX, y - towardsY, b, towardsX, towardsY)
    : y !== 0
    ? y
    : x;
};

/**
 * Recursivelly find available position x on board.
 * @param type Tetromino type
 * @param d Tetromino direction
 * @param x Tetromino current x position on board
 * @param y Tetromino current y position on board
 * @param b Board
 * @param towardsX Position x to check
 */
export const recFindAvailablePosX = (
  type: TetroEnum,
  d: DirectionEnum,
  x: number,
  y: number,
  b: Board,
  towardsX: number
): number => recFindAvailablePos(type, d, x, y, b, towardsX, 0);

/**
 * Recursivelly find available position y on board.
 * @param type Tetromino type
 * @param d Tetromino direction
 * @param x Tetromino current x position on board
 * @param y Tetromino current y position on board
 * @param b Board
 * @param towardsY Position y to check
 */
export const recFindAvailablePosY = (
  type: TetroEnum,
  d: DirectionEnum,
  x: number,
  y: number,
  b: Board,
  towardsY: number
): number => recFindAvailablePos(type, d, x, y, b, 0, towardsY);

/**
 * Get board position for completed rows.
 * @param b Board
 */
export const getCompleteRowIdxs = (b: Board): number[] =>
  b.flatMap((row, idx) => (row.every((cell) => cell !== NoTetro) ? [idx] : []));

/**
 * Remove from the board completed rows.
 * @param b Board
 * @param lineIdxs Rows position
 */
export const removeCompleteRowFromBoard = (
  b: Board,
  lineIdxs: number[]
): Readonly<{
  board: Board;
  totRemoved: number;
}> => {
  const newBoard = b.filter((_row, ridx) => !lineIdxs.some((idx) => idx === ridx));
  return {
    board: newBoard,
    totRemoved: b.length - newBoard.length,
  };
};

/**
 * Make a new row.
 * @param len The number of rows to create
 * @param t Tile type
 */
export const mkRow = (len: number, t: Tile): BoardRow => [...Array(len).fill(t)];

/**
 * Make an empty row.
 */
export const mkEmptyRow = mkRow(BOARD_CELLS, NoTetro);

/**
 * Append empty rows to the board.
 * @param b Board
 * @param amount Amount rows to append
 */
export const appendEmptyRowsToBoard = (b: Board, amount: number): Board => [
  ...Array(amount).fill(mkEmptyRow),
  ...b,
];

/**
 * Detect and remove completed rows from the board.
 * @param b Board
 */
export const detectAndRemoveCompletedRows = (b: Board): Board =>
  pipe(
    getCompleteRowIdxs(b),
    (idxsRowCompleted) => removeCompleteRowFromBoard(b, idxsRowCompleted),
    ({ board, totRemoved }) => appendEmptyRowsToBoard(board, totRemoved)
  );
