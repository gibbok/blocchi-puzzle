import { Board, Cell } from './types';

export const mkEmptyBoard = (rowsTot: number) => (columnTot: number): Board =>
  new Array(rowsTot).fill(new Array(columnTot).fill(0 as Cell));
