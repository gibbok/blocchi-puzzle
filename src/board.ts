import { Board, Cell, TetroEnum, DirectionEnum, TetroRow, Tetro } from './types';
import { pieces } from './tetromino';

export const logNice = (x: Tetro | Board) => {
  console.log(x.reduce((acc, v) => `${acc} ${v.concat()} \n`, ''));
};

export const mkEmptyBoard = (rows: number) => (columns: number): Board =>
  [...Array(rows)].fill([...Array(columns).fill(0 as Cell)]);

export const calculateNewBoard = (t: TetroEnum) => (d: DirectionEnum) => (newX: number) => (
  newY: number
) => (board: Board): Board => {
  const tetro = pieces[t][d];
  let tempBoard = board.map(x => x.map(x => x));
  tetro.forEach((row: TetroRow, rowX: number) =>
    row.forEach((cell: Cell, cellY: number) => {
      if (tetro[rowX][cellY] !== 0 && board[rowX + newY][cellY + newX] === 0) {
        return (tempBoard[rowX + newY][cellY + newX] = t);
      } else {
        return tempBoard[rowX + newY][cellY + newX];
      }
    })
  );
  return tempBoard;
};

export const canMoveTetroToPostion = (t: TetroEnum) => (d: DirectionEnum) => (newCell: number) => (
  newRow: number
) => (board: Board): boolean => {
  const tetro = pieces[t][d];

  return tetro.some((row, tRow) =>
    row.some((cell, tCell) => {
      const futurePosRow = tRow + newRow;
      const futurePosCell = tCell + newCell;
      const tetroCellCnt = cell;
      const boardCellCnt = board[futurePosRow][futurePosCell];
      const isTetroCollideBoard = tetroCellCnt !== 0 && boardCellCnt !== 0;
      if (isTetroCollideBoard) {
        return false;
      }
      return true;
    })
  );
};
