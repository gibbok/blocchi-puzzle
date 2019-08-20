export const BOARD_CELLS = 10;
export const BOARD_ROWS = 20;

import { Board, Cell } from './types';

export const mkEmptyBoard = (rows: number) => (columns: number): Board =>
  [...Array(rows)].fill([...Array(columns).fill(0 as Cell)]);
