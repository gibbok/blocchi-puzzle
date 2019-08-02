import { Board, Cell, TetroEnum, DirectionEnum, TetroRow, Tetro, Position } from './types';
import { getTetroFromPieces } from './tetromino';

export const logNice = (x: Tetro | Board) => {
  console.log(x.reduce((acc, v) => `${acc} ${v.concat()} \n`, ''));
};

export const mkEmptyBoard = (rows: number) => (columns: number): Board =>
  [...Array(rows)].fill([...Array(columns).fill(0 as Cell)]);

export const canTetroFitInBoard = (t: TetroEnum) => (d: DirectionEnum) => (newRowPos: Position) => (
  newCellPos: Position
) => (board: Board): boolean => {
  const tetro = getTetroFromPieces(t)(d);
  const boardRowsLen = board.length - 1;
  const tetroRowsLen = tetro.length - 1;
  const boardCellsLen = board[0].length - 1;
  const tetroCellsLen = tetro[-0].length - 1;
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

      const isSizeTetroValid =
        newRowPos + tetroRowsLen <= boardRowsLen && newCellPos + tetroCellsLen <= boardCellsLen;
      if (!isSizeTetroValid) {
        return false;
      }

      const boardCellCnt = board[futureRowPos][futureCellPos];
      const canTetroFitInBoard = tCell === 0 && boardCellCnt === 0;
      if (!canTetroFitInBoard) {
        return false;
      }

      return true;
    })
  );
};
export const lockTetroOnBoard = (t: TetroEnum) => (d: DirectionEnum) => (newRowPos: Position) => (
  newCellPos: Position
) => (board: Board): Board => {
  const tetro = getTetroFromPieces(t)(d);
  let tempBoard = board.map(x => x.map(x => x));
  tetro.forEach((row: TetroRow, rowX: number) =>
    row.forEach((cell: Cell, cellY: number) => {
      const futureRowPos = rowX + newRowPos;
      const futureCellPos = cellY + newCellPos;
      const tetroCell = tetro[rowX][cellY];
      // const boardCell = board[futureRowPos][futureCellPos];
      // if (tetroCell !== 0 && boardCell === 0) { // version do not ovveride
      // version ovveride anything
      if (tetroCell !== 0) {
        return (tempBoard[futureRowPos][futureCellPos] = t);
      } else {
        return tempBoard[futureRowPos][futureCellPos];
      }
    })
  );
  return tempBoard;
};
