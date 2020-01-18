import { InternalState } from '~game/types';
import { isOccupied } from '~game';

export const moveLeft = (prevState: InternalState) => {
  const {
    board,
    score,
    level,
    lines,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay,
    isGameOver,
    screen
  } = prevState;
  const newLeftX = x - 1;
  const isOccupiedLeft = isOccupied(type, direction, newLeftX, y, board);
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
    isPlay,
    isGameOver,
    screen
  };
};
