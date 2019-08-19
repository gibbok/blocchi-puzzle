import { TetroEnum, DirectionEnum, AppState, Board } from './types';
import { mkInternalState } from './state';
import { logNice } from './board';

export const logic = (t: TetroEnum) => (d: DirectionEnum) => (posRow: number) => (
  posCell: number
) => (b: Board): AppState => {
  const internalState = mkInternalState(t)(d)(posRow)(posCell)(b);
  if (posRow < b.length) {
    return logic(t)(d)(posRow + 1)(posCell)(internalState.board);
  }
  console.log(internalState);
  return internalState;
};
