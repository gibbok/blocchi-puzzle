import { TetroEnum, DirectionEnum, InternalState, Board, PublicState } from './types';
import { canTetroFitInBoard, lockTetroOnBoard } from './board';
import { getTetroFromPieces } from './tetromino';

export const mkInternalState = (t: TetroEnum) => (d: DirectionEnum) => (posRow: number) => (
  posCell: number
) => (b: Board): InternalState => {
  const canTetroFit = canTetroFitInBoard(t)(d)(posRow)(posCell)(b);
  const canTetroFitNextMove = canTetroFitInBoard(t)(d)(posRow + 1)(posCell)(b);
  const newBoard =
    canTetroFit && canTetroFitNextMove ? b : lockTetroOnBoard(t)(d)(posRow)(posCell)(b);
  return {
    tetroType: t,
    tetroOrientation: d,
    posRow,
    posCell,
    board: newBoard
  };
};

export const mkPublicState = (t: TetroEnum) => (d: DirectionEnum) => (posRow: number) => (
  posCell: number
) => (b: Board): PublicState => {
  let tempBoard = b.map(x => x.map(x => x));
  const tetro = getTetroFromPieces(t)(d);
  for (let tr = 0; tr < tetro.length; tr++) {
    for (let tc = 0; tc < tetro[tr].length; tc++) {
      const futureTr = tr + posRow;
      const futureTc = tc + posCell;
      const tetroCell = tetro[tr][tc];
      // if (tempBoard[futureTr] && tempBoard[futureTr][futureTc]) {
      tempBoard[futureTr][futureTc] = tetroCell;
      // }
    }
  }

  return {
    board: tempBoard
  };
};
