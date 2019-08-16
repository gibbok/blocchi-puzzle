import { TetroEnum, DirectionEnum, AppState, Board } from './types';
import { canTetroFitInBoard, lockTetroOnBoard } from './board';

export const mkInternalState = (t: TetroEnum) => (d: DirectionEnum) => (posRow: number) => (
  posCell: number
) => (b: Board): AppState => {
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
