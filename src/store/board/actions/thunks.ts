import { AppThunk, gameSlice } from '../../../store/reducer';
import { InternalState, Action } from 'game/types';
import { ThunkDispatch } from '@reduxjs/toolkit';
const {
  actions: { moveDown, checkBoard, gameOver },
} = gameSlice;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const moveDownThunk = (): AppThunk => (dispatch, _getState): void => {
  dispatch(moveDown());
  dispatch(checkBoard());
  dispatch(gameOver());
};
