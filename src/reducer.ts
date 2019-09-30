import { InternalState, Action, ActionEnum, TetroEnum, DirectionEnum } from './types';
import { mkEmptyBoard, addTetroToBoard, recFindAvailablePos } from './board';
import { occupied } from './tetromino';

export const mkInitialState = () => ({
  board: mkEmptyBoard(20)(10),
  score: 0,
  level: 1,
  lines: 0,
  currentTetro: {
    type: TetroEnum.I, // TODO get random
    direction: DirectionEnum.N, // TODO get randome
    x: 0,
    y: 0
  },
  nextTetro: {
    type: TetroEnum.S, // TODO get random
    direction: DirectionEnum.N, // TODO get randome
    x: 0,
    y: 0
  },
  isPlay: true // TODO pause before start game
});

export const reducer = (
  prevState: InternalState = mkInitialState(),
  action: Action
): InternalState => {
  const {
    board,
    score,
    level,
    lines,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay
  } = prevState;
  switch (action.type) {
    case ActionEnum.MoveDown:
      const newY = y + 1;
      const isOccupiedDown = occupied(type)(direction)(x)(newY)(board);
      const foundPosY = recFindAvailablePos(type)(direction)(x)(newY)(board)(0)(-1);
      return {
        board: isOccupiedDown ? addTetroToBoard(type)(direction)(x)(foundPosY)(board) : board,
        score,
        level,
        lines,
        currentTetro: {
          type,
          direction,
          x,
          y: isOccupiedDown ? foundPosY : newY
        },
        nextTetro,
        isPlay
      };
    case ActionEnum.MoveRight:
      const newX = x + 1;
      const isOccupiedRight = occupied(type)(direction)(newX)(y)(board);
      const foundPosX = recFindAvailablePos(type)(direction)(newX)(y)(board)(1)(0);
      return {
        board: isOccupiedRight ? addTetroToBoard(type)(direction)(foundPosX)(y)(board) : board,
        score,
        level,
        lines,
        currentTetro: {
          type,
          direction,
          x: isOccupiedRight ? foundPosX : newX,
          y
        },
        nextTetro,
        isPlay
      };
    default:
      return prevState;
  }
};
