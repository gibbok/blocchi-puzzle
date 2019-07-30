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

export const canMoveTetroToPostion = (t: TetroEnum) => (d: DirectionEnum) => (newX: number) => (
  newY: number
) => (board: Board): boolean => {
  const tetro = pieces[t][d];
  let result = true;
  for (let tetroRow = 0; tetroRow < tetro.length; tetroRow++) {
    for (let tetroCell = 0; tetroCell < tetro[tetroRow].length; tetroCell++) {
      const futurePosRow = tetroRow + newY;
      const futurePosCell = tetroCell + newX;
      const tetroCellContnt = tetro[tetroRow][tetroCell];
      const boardCellContent = board[futurePosRow][futurePosCell];
      const doesTetroTouchBoard = tetroCellContnt !== 0 && boardCellContent !== 0;
      if (doesTetroTouchBoard) {
        result = false;
        break;
      }
    }
  }
  return result;
};
