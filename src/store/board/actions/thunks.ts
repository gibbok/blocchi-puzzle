import { AppThunk, gameSlice } from '~store/reducer';
const {
  actions: { moveDown, checkBoard }
} = gameSlice;

// This is thunk
export const moveDownThunk = (): AppThunk => (dispatch, _getState) => {
  dispatch(moveDown());
  dispatch(checkBoard());
};
