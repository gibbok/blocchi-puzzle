import { InternalState } from '../../../game/types';
import { rotateTetroDirectionCW, isOccupied } from '../../../game';

/**
 * Move up game logic. Check for collisions with other tetrominoes.
 * @param prevState Previous state
 */
export const moveUp = (prevState: InternalState): InternalState => {
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
  const directionNew = rotateTetroDirectionCW(direction);
  const isOccupiedUp = isOccupied(type, directionNew, x, y, board);
  return {
    board,
    score,
    level,
    lines,
    currentTetro: {
      type,
      direction: isOccupiedUp ? direction : directionNew,
      x,
      y,
    },
    nextTetro,
    isPlay,
    isGameOver,
    screen,
  };
};
