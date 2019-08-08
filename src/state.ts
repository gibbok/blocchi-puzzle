import { TetroEnum, DirectionEnum, AppState, Board } from './types';
import { canTetroFitInBoard, lockTetroOnBoard } from './board';

export const calculateState = (t: TetroEnum) => (d: DirectionEnum) => (posRow: number) => (
  posCell: number
) => (b: Board): AppState => {
  const canTetroFit = canTetroFitInBoard(t)(d)(posRow)(posCell)(b);
  const newBoard = canTetroFit ? b : lockTetroOnBoard(t)(d)(posRow)(posCell)(b);
  return {
    tetroType: t,
    tetroOrientation: d,
    posRow,
    posCell,
    board: newBoard
  };
};
