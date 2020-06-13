import { AppThunk, gameSlice } from '../../../store/reducer';
import { InternalState, Action } from 'game/types';
import { ThunkDispatch } from '@reduxjs/toolkit';

const {
  actions: { moveDown, checkBoard, gameOver },
} = gameSlice;

/**
 * Move down thunk which dispatches several actions with for logic execution.
 */
export const moveDownThunk = (): AppThunk => (
  dispatch: ThunkDispatch<InternalState, null, Action>
): void => {
  dispatch(moveDown());
  dispatch(checkBoard());
  dispatch(gameOver());
};
