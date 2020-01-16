import { AppThunk, gameSlice } from '~store/reducer';
const {
  actions: { moveDown, moveRight }
} = gameSlice;

export const moveDownLogicThunk = (): AppThunk => {
  return function exampleThunkFunction(dispatch, _getState) {
    dispatch(moveDown());
    dispatch(moveRight());
    // do something useful with dispatching or the store state here
  };
};
