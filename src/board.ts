import { Board, Block, TetroEnum, DirectionEnum } from './types';
import { getTetroFromPieces, occupied } from './tetromino';

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

type LineInfo = Readonly<{ tot: number; lineIndex: readonly number[] }>;
type LineInfoBoard = LineInfo &
  Readonly<{
    board: Board;
  }>;

export const checkMatchesOnBoard = (b: Board): LineInfoBoard => {
  console.log(b.length);
  const { tot, lineIndex } = b.reduce(
    (acc: LineInfo, row: readonly Block[]) => {
      const lineFilled = row.every(cell => cell !== 0) ? 1 : 0;
      // TODO bug here I want the row not the index of the cell
      const lineIndex = row.flatMap((c, idx) => {
        console.log(c, idx);
        return c !== 0 ? [idx] : [];
      });
      return {
        tot: acc.tot + lineFilled,
        lineIndex
      };
    },
    { tot: 0, lineIndex: [] }
  );
  return {
    tot,
    lineIndex: lineIndex,
    board: b
  };
};
