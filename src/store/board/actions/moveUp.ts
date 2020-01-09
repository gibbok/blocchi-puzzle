import { InternalState } from '~game/types';
import { rotateTetroDirectionACW, occupied } from '~game';

export const moveUp = (prevState: InternalState) => {
  const {
    board,
    score,
    level,
    lines,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay
  } = prevState;
  const directionNew = rotateTetroDirectionACW(direction);
  const isOccupiedUp = occupied(type, directionNew, x, y, board);
  return {
    board,
    score,
    level,
    lines,
    currentTetro: {
      type,
      direction: isOccupiedUp ? direction : directionNew,
      x,
      y
    },
    nextTetro,
    isPlay
  };
};
