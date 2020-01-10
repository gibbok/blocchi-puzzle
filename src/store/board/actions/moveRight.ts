import { InternalState } from '~game/types';
import { occupied } from '~game';
import { logger } from '~utils';

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
  const newState = {
    board,
    score,
    level,
    lines,
    currentTetro: {
      type,
      direction,
      x: isOccupiedRight ? x : newRightX,
      y
    },
    nextTetro,
    isPlay
  };
  logger(newState.board);
  return newState;
};
