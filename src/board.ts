import { Board, Cell, TetroEnum, DirectionEnum, TetroRow, Tetro, Position } from './types';
import { pieces } from './tetromino';

export const logNice = (x: Tetro | Board) => {
  console.log(x.reduce((acc, v) => `${acc} ${v.concat()} \n`, ''));
};

export const mkEmptyBoard = (rows: number) => (columns: number): Board =>
  [...Array(rows)].fill([...Array(columns).fill(0 as Cell)]);

// export const calculateNewBoard = (t: TetroEnum) => (d: DirectionEnum) => (newX: number) => (
//   newY: number
// ) => (board: Board): Board => {
//   const tetro = pieces[t][d];
//   let tempBoard = board.map(x => x.map(x => x));
//   tetro.forEach((row: TetroRow, rowX: number) =>
//     row.forEach((cell: Cell, cellY: number) => {
//       if (tetro[rowX][cellY] !== 0 && board[rowX + newY][cellY + newX] === 0) {
//         return (tempBoard[rowX + newY][cellY + newX] = t);
//       } else {
//         return tempBoard[rowX + newY][cellY + newX];
//       }
//     })
//   );
//   return tempBoard;
// };

export const canPositionTetroWithinBoard = (t: TetroEnum) => (d: DirectionEnum) => (
  newRowPos: Position
) => (newCellPos: Position) => (board: Board): boolean => {
  const tetro = pieces[t][d];

  return tetro.some((tRow: TetroRow, tRowPos: number) =>
    tRow.some((tCell: Cell, tCellPos: number) => {
      const futureRowPos = tRowPos + newRowPos;
      const futureCellPos = tCellPos + newCellPos;

      const isNewRowPosValid = futureRowPos >= 0 && futureRowPos <= board.length - 1;
      if (!isNewRowPosValid) {
        return false;
      }
      const isNewCellPosValid =
        futureCellPos >= 0 && futureCellPos <= board[futureRowPos].length - 1;
      if (!isNewCellPosValid) {
        return false;
      }

      const boardCellCnt = board[futureRowPos][futureCellPos];

      const doesTetroCollideBoard = tCell !== 0 && boardCellCnt !== 0;
      // const doesTetroCollideBoardWallsSO = futureRowPos <= board.length ? false : true;
      // const doesTetroCollideBoardWallsWE = futureCellPos <= -1;
      // const doesTetroCollideBoardWallsES = futureCellPos >= board.length;

      return !doesTetroCollideBoard;
      // !doesTetroCollideBoardWallsSO &&
      // !doesTetroCollideBoardWallsWE &&
      // !doesTetroCollideBoardWallsES
    })
  );
};
