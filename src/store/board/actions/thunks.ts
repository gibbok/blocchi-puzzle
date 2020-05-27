import { AppThunk, gameSlice } from '../../../store/reducer';
const {
  actions: { moveDown, checkBoard, gameOver },
} = gameSlice;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const moveDownThunk = (): AppThunk => (dispatch, _getState) => {
  dispatch(moveDown());
  dispatch(checkBoard());
  dispatch(gameOver());
};
