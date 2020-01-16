import { InternalState, TetroEnum, DirectionEnum } from '~game/types';
import { isOccupied, recFindAvailablePosY, addTetroToBoard } from '~game';

export const moveDown = (prevState: InternalState) => {
  const {
    board,
    score,
    level,
    lines,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay
  } = prevState;
  const newY = y + 1;
  const isOccupiedDown = isOccupied(type, direction, x, newY + 1, board);
  const foundPosY = recFindAvailablePosY(type, direction, x, newY, board, 1);
  const newState = {
    board: isOccupiedDown ? addTetroToBoard(type, direction, x, foundPosY, board) : board,
    score,
    level,
    lines,
    currentTetro: {
      type: isOccupiedDown ? TetroEnum.L : type, // get random here
      direction: isOccupiedDown ? DirectionEnum.N : direction, //get random here
      x: isOccupiedDown ? 0 : x,
      y: isOccupiedDown ? 0 : foundPosY
    },
    nextTetro,
    isPlay
  };
  return newState;
};

// export const moveDownThunk = (prevState: InternalState): AppThunk => dispatch => {
//   // dispatch(moveDown(prevState));
//   dispatch(checkBoard);
// };
