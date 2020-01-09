import { InternalState } from '~game/types';
import { occupied, recFindAvailablePosX, addTetroToBoard } from '~game';

export const moveLeft = (prevState: InternalState) => {
  const {
    board,
    score,
    level,
    lines,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay
  } = prevState;
  const newLeftX = x - 1;
  const isOccupiedLeft = occupied(type, direction, newLeftX, y, board);
  const foundLeftPosX = recFindAvailablePosX(type, direction, newLeftX, y, board, -1);
  return {
    board: isOccupiedLeft ? addTetroToBoard(type, direction, foundLeftPosX, y, board) : board,
    score,
    level,
    lines,
    currentTetro: {
      type,
      direction,
      x: isOccupiedLeft ? foundLeftPosX : newLeftX,
      y
    },
    nextTetro,
    isPlay
  };
};
