import { InternalState } from '../../../game/types';
import { isOccupied } from '../../../game';

/**
 * Move left game logic. Check for collisions with other tetrominoes or board limits.
 * @param prevState Previous state
 */
export const moveLeft = (prevState: InternalState): InternalState => {
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
      y,
    },
    nextTetro,
    isPlay,
    isGameOver,
    screen,
  };
};
