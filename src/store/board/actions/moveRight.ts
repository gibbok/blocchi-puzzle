import { InternalState } from '~game/types';
import { occupied, recFindAvailablePosX, addTetroToBoard } from '~game';

export const moveRight = (prevState: InternalState) => {
  const {
    board,
    score,
    level,
    lines,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay
  } = prevState;
  const newRightX = x + 1;
  const isOccupiedRight = occupied(type, direction, newRightX, y, board);
  const foundRightPosX = recFindAvailablePosX(type, direction, newRightX, y, board, 1);

  return {
    board: isOccupiedRight ? addTetroToBoard(type, direction, foundRightPosX, y, board) : board,
    score,
    level,
    lines,
    currentTetro: {
      type,
      direction,
      x: isOccupiedRight ? foundRightPosX : newRightX,
      y
    },
    nextTetro,
    isPlay
  };
};
