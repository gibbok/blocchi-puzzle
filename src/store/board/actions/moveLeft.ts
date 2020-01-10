import { InternalState } from '~game/types';
import { occupied } from '~game';

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
  return {
    board,
    score,
    level,
    lines,
    currentTetro: {
      type,
      direction,
      x: isOccupiedLeft ? x : newLeftX,
      y
    },
    nextTetro,
    isPlay
  };
};
