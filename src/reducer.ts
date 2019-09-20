import { InternalState, Action, ActionEnum, TetroEnum, DirectionEnum } from './types';
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

// TODO add test to the reducer
export const reducer = (
  prevState: InternalState = mkInitialState(),
  action: Action
): InternalState => {
  switch (action.type) {
    case ActionEnum.MoveDown:
      // if next move down is not occupied render tetro into the board
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
      const isOccupied = occupied(type)(direction)(x)(newY + 1)(board);
      return {
        board: isOccupied ? addTetroToBoard(type)(direction)(x)(newY)(board) : board,
        score,
        level,
        lines,
        currentTetro: {
          type,
          direction,
          x,
          y: isOccupied ? y : newY
        },
        nextTetro,
        isPlay
      };
      break;
    default:
      return prevState;
  }
};
