import { InternalState } from '../../../game/types';
import { isOccupied } from '../../../game';

export const moveRight = (prevState: InternalState): InternalState => {
  const {
    board,
    score,
    level,
    lines,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay,
    isGameOver,
    screen,
  } = prevState;
  const newRightX = x + 1;
  const isOccupiedRight = isOccupied(type, direction, newRightX, y, board);
  const newState = {
    board,
    score,
    level,
    lines,
    currentTetro: {
      type,
      direction,
      x: isOccupiedRight ? x : newRightX,
      y,
    },
    nextTetro,
    isPlay,
    isGameOver,
    screen,
  };
  return newState;
};
