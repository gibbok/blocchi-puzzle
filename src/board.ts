import { Board, Cell, TetroEnum, DirectionEnum, TetroRow, Tetro } from './types';
import { pieces } from './tetromino';

export const printPrettier = (x: Tetro | Board) => {
  console.log(x.reduce((acc, v) => `${acc} ${v.concat()} \n`, ''));
};

export const mkEmptyBoard = (rows: number) => (columns: number): Board =>
  [...Array(rows)].fill([...Array(columns).fill(0 as Cell)]);

export const calculateNewBoard = (t: TetroEnum) => (d: DirectionEnum) => (newX: number) => (
  newY: number
) => (board: Board): Board => {
  const tetro = pieces[t][d];
  printPrettier(tetro);
  tetro.map((row: TetroRow, x: number) =>
    row.map((cell: Cell, y: number) => {
      if (board[x][x + newX] !== 0 && board[y][y + newY] !== 0) {
        return board;
      }
      return board;
    })
  );
  return tetro;
};
