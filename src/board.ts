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
  const tetroRowsLen = tetro.length;
  const tetroCellsLen = tetro[0].length;
  const boardRowsLen = board.length;
  const boardCellsLen = board[0].length;
  let result = true;
  for (let r = 0; r < tetro.length; r++) {
    if (result === false) {
      break;
    }
    for (let c = 0; c < tetro[r].length; c++) {
      const futureRowPos = r + newRowPos;
      const futureCellPos = c + newCellPos;

      const isNewRowPosValid = futureRowPos >= 0 && futureRowPos < boardRowsLen;
      if (!isNewRowPosValid) {
        result = false;
        break;
      }

      const isNewCellPosValid = futureCellPos >= 0 && futureCellPos < board[futureRowPos].length;
      if (!isNewCellPosValid) {
        result = false;
        break;
      }

      const isSizeTetroValid =
        newRowPos + tetroRowsLen <= boardRowsLen && newCellPos + tetroCellsLen <= boardCellsLen;
      if (!isSizeTetroValid) {
        result = false;
        break;
      }

      const boardCellCnt = board[futureRowPos][futureCellPos];
      const canTetroFitInBoard = boardCellCnt === 0;
      if (!canTetroFitInBoard) {
        result = false;
        break;
      }
    }
  }
  return result;
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

      if (
        tempBoard[futureRowPos] === undefined ||
        tempBoard[futureRowPos][futureCellPos] === undefined
      ) {
        return;
      }

      if (tetroCell !== 0) {
        return (tempBoard[futureRowPos][futureCellPos] = t);
      } else {
        return tempBoard[futureRowPos][futureCellPos];
      }
    })
  );
  return tempBoard;
};
