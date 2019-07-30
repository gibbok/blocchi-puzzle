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
  newRow: Position
) => (newCell: Position) => (board: Board): boolean => {
  const tetro = pieces[t][d];

  return tetro.some((row: TetroRow, tRow: number) =>
    row.some((cell: Cell, tCell: number) => {
      const futurePosRow = tRow + newRow;
      const futurePosCell = tCell + newCell;
      const tetroCellCnt = cell;

      const isNewRowNotValid =
        futurePosRow > board.length - 1 || futurePosRow < 0 + tetro.length - 1;
      const isNewCellNotValid = futurePosCell > board[0].length - 1 || futurePosCell < 0;
      if (isNewRowNotValid || isNewCellNotValid) {
        return false;
      }

      const boardCellCnt = board[futurePosRow][futurePosCell];

      const doesTetroCollideBoard = tetroCellCnt !== 0 && boardCellCnt !== 0;
      const doesTetroCollideBoardWallsSO = futurePosRow <= board.length ? false : true;
      const doesTetroCollideBoardWallsWE = futurePosCell <= -1;
      const doesTetroCollideBoardWallsES = futurePosCell >= board.length;

      return (
        !doesTetroCollideBoard &&
        !doesTetroCollideBoardWallsSO &&
        !doesTetroCollideBoardWallsWE &&
        !doesTetroCollideBoardWallsES
      );
    })
  );
};
