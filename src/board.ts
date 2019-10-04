import { Board, Block, TetroEnum, DirectionEnum } from './types';
import { getTetroFromPieces, occupied } from './tetromino';
import { pipe } from 'fp-ts/lib/pipeable';

export const TOT_BOARD_CELLS = 10;
export const TOT_BOARD_ROWS = 20;

export const mkEmptyBoard = (rows: number) => (columns: number): Board =>
  [...Array(rows)].fill([...Array(columns).fill(0 as Block)]);

export const addTetroToBoard = (t: TetroEnum) => (d: DirectionEnum) => (x: number) => (
  y: number
) => (b: Board) => {
  const tetro = getTetroFromPieces(t)(d);
  let bn = b.map(r => r.map(c => c));
  tetro.forEach((tR, tRx) => tR.forEach((tC, tCx) => (bn[tRx + y][tCx + x] = t)));
  return bn;
};

export const recFindAvailablePos = (type: TetroEnum) => (d: DirectionEnum) => (x: number) => (
  y: number
) => (b: Board) => (towardsX: number) => (towardsY: number): number => {
  const isOccupied = occupied(type)(d)(x)(y)(b);
  return isOccupied
    ? recFindAvailablePos(type)(d)(x - towardsX)(y - towardsY)(b)(towardsX)(towardsY)
    : y !== 0
    ? y
    : x;
};

export const recFindAvailablePosX = (type: TetroEnum) => (d: DirectionEnum) => (x: number) => (
  y: number
) => (b: Board) => (towardsX: number): number => recFindAvailablePos(type)(d)(x)(y)(b)(towardsX)(0);

export const recFindAvailablePosY = (type: TetroEnum) => (d: DirectionEnum) => (x: number) => (
  y: number
) => (b: Board) => (towardsY: number): number => recFindAvailablePos(type)(d)(x)(y)(b)(0)(towardsY);

export const getCompleteRowIdxs = (b: Board): number[] =>
  b.flatMap((row, idx) => (row.every(cell => cell !== 0) ? [idx] : []));

export const removeCompleteRowFromBoard = (b: Board) => (
  lineIdxs: number[]
): Readonly<{
  board: Board;
  totRemoved: number;
}> => {
  const newBoard = b.filter((_row, ridx) => !lineIdxs.some(idx => idx === ridx));
  return {
    board: newBoard,
    totRemoved: b.length - newBoard.length
  };
};

export const mkRow = (len: number) => (b: Block) => [...Array(len).fill(b)];
export const mkEmptyRow = mkRow(TOT_BOARD_CELLS)(0);

export const appendEmptyRowsToBoard = (b: Board) => (amount: number): Board => [
  ...Array(amount).fill(mkEmptyRow),
  ...b
];

export const detectAndRemoveCompletedRows = (b: Board): Board =>
  pipe(
    getCompleteRowIdxs(b),
    idxsRowCompleted => removeCompleteRowFromBoard(b)(idxsRowCompleted),
    ({ board, totRemoved }) => appendEmptyRowsToBoard(board)(totRemoved)
  );
