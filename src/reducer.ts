import { InternalState, Action, ActionEnum, TetroEnum, DirectionEnum, Board } from './types';
import { mkEmptyBoard, addTetroToBoard } from './board';
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

export const recBoard = (type: TetroEnum) => (d: DirectionEnum) => (x: number) => (y: number) => (
  b: Board
): Board => {
  const fn = (newY: number) => occupied(type)(d)(x)(newY)(b);
  if (fn(y)) {
    return recBoard(type)(d)(x)(y - 1)(b);
  } else {
    return addTetroToBoard(type)(d)(x)(y)(b);
  }
};

export const recPos = (type: TetroEnum) => (d: DirectionEnum) => (x: number) => (y: number) => (
  b: Board
): number => {
  const fn = (newY: number) => occupied(type)(d)(x)(newY)(b);
  if (fn(y)) {
    return recPos(type)(d)(x)(y - 1)(b);
  } else {
    return y;
  }
};

// TODO add test to the reducer
export const reducer = (
  prevState: InternalState = mkInitialState(),
  action: Action
): InternalState => {
  switch (action.type) {
    case ActionEnum.MoveDown:
      const {
        board,
        score,
        level,
        lines,
        currentTetro: { type, direction, x, y },
        nextTetro,
        isPlay
      } = prevState;
      const newY = y + 1;
      const isOccupied = occupied(type)(direction)(x)(newY)(board);
      return {
        board: isOccupied ? recBoard(type)(direction)(x)(newY)(board) : board,
        score,
        level,
        lines,
        currentTetro: {
          type,
          direction,
          x,
          y: isOccupied ? recPos(type)(direction)(x)(newY)(board) : newY
        },
        nextTetro,
        isPlay
      };
      break;
    default:
      return prevState;
  }
};
