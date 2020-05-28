import { AppThunk, gameSliceXXX } from '../../../store/reducer';
import { InternalState, Action } from 'game/types';
import { ThunkDispatch } from '@reduxjs/toolkit';
const {
  actions: { moveDown, checkBoard, gameOver },
} = gameSliceXXX;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const moveDownThunk = (): AppThunk => (
  dispatch: ThunkDispatch<InternalState, null, Action>
): void => {
  dispatch(moveDown());
  dispatch(checkBoard());
  dispatch(gameOver());
};
