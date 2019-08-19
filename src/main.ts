import { TetroEnum, DirectionEnum, AppState, Board } from './types';
import { mkInternalState } from './state';

export const logic = (startRow: number) => (startCell: number) => (b: Board): AppState => {
  const t = TetroEnum.I; // TODO random instead
  const d = DirectionEnum.N; // TODO random instead
  const internalState = mkInternalState(t)(d)(startRow)(startCell)(b);
  if (startRow < b.length) {
    return logic(startRow + 1)(startCell)(internalState.board);
  }
  return internalState;
};
