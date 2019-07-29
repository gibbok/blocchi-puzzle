import { Board, Cell } from './types';

export const mkEmptyBoard = (rows: number) => (columns: number): Board =>
  [...Array(rows)].fill([...Array(columns).fill(0 as Cell)]);
