import { InternalState, DirectionEnum } from '../../../game/types';
import {
  isOccupied,
  recFindAvailablePosY,
  addTetroToBoard,
  getRandomTetroEnum,
  setTetroPositionXCenterBoard,
} from '../../../game';
import { BOARD_CELLS } from '../../../game/settings';

/**
 * Move down game logic. Check for collisions and game over. Create the next tetromino information.
 * @param prevState Previous state
 */
export const moveDown = (prevState: InternalState): InternalState => {
  const {
    board,
    score,
    level,
    lines,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay,
    screen,
  } = prevState;
  const newY = y + 1;
  const isOccupiedDown = isOccupied(type, direction, x, newY, board);
  const foundPosY = recFindAvailablePosY(type, direction, x, newY, board, 1);
  const isGameOver = newY === 1 && isOccupiedDown;
  const nextTetroType = isOccupiedDown ? getRandomTetroEnum()() : nextTetro.type;

  const nextTetroX = setTetroPositionXCenterBoard(BOARD_CELLS, nextTetroType, DirectionEnum.N);
  const newState = {
    board: isOccupiedDown ? addTetroToBoard(type, direction, x, foundPosY, board) : board,
    score,
    level,
    lines,
    currentTetro: {
      type: isOccupiedDown ? nextTetro.type : type,
      direction: isOccupiedDown ? DirectionEnum.N : direction,
      x: isOccupiedDown
        ? setTetroPositionXCenterBoard(BOARD_CELLS, nextTetro.type, DirectionEnum.N)
        : x,
      y: isOccupiedDown ? 0 : foundPosY,
    },
    nextTetro: {
      type: nextTetroType,
      direction: DirectionEnum.N,
      x: nextTetroX,
      y: 0,
    },
    isPlay,
    isGameOver,
    screen,
  };
  return newState;
};
