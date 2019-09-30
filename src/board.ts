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
  console.log(x, y, towardsX, towardsY);
  const isOccupied = occupied(type)(d)(x)(y)(b);
  return isOccupied
    ? recFindAvailablePos(type)(d)(x + towardsX)(y + towardsY)(b)(towardsX)(towardsY)
    : y !== 0 // TODO make it better it should receive only one value fnot x: 1 y:1
    ? y
    : x;
};
