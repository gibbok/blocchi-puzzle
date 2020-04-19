import { InternalState, DirectionEnum } from '~game/types';
import { isOccupied, recFindAvailablePosY, addTetroToBoard, getRandomTetroEnum } from '~game';

export const moveDown = (prevState: InternalState) => {
  // SPO
  const {
    board,
    score,
    level,
    lines,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay,
    screen
  } = prevState;
  const newY = y + 1;
  // const isOccupiedDown = isOccupied(type, direction, x, newY + 1, board); BUG
  const isOccupiedDown = isOccupied(type, direction, x, newY, board);
  const foundPosY = recFindAvailablePosY(type, direction, x, newY, board, 1);
  const isGameOver = newY === 1 && isOccupiedDown;
  const newState = {
    board: isOccupiedDown ? addTetroToBoard(type, direction, x, foundPosY, board) : board,
    score,
    level,
    lines,
    currentTetro: {
      type: isOccupiedDown ? nextTetro.type : type,
      direction: isOccupiedDown ? DirectionEnum.N : direction,
      x: isOccupiedDown ? 0 : x,
      y: isOccupiedDown ? 0 : foundPosY
    },
    nextTetro: {
      type: isOccupiedDown ? getRandomTetroEnum()() : nextTetro.type,
      direction: DirectionEnum.N,
      x: 0,
      y: 0
    },
    isPlay,
    isGameOver,
    screen
  };
  return newState;
};

// export const moveDownThunk = (prevState: InternalState): AppThunk => dispatch => {
//   // dispatch(moveDown(prevState));
//   dispatch(checkBoard);
// };
