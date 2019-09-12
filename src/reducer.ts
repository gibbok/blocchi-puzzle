import { InternalState, Action, ActionEnum, TetroEnum, DirectionEnum } from './types';
import { mkEmptyBoard } from './board';
import { occupied } from './tetromino';

const mkInitialState = () => ({
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

const reducer = (prevState: InternalState = mkInitialState(), action: Action): InternalState => {
  switch (action.type) {
    case ActionEnum.MoveDown:
      // if next move is not occupied render the board
      const {
        board,
        score,
        level,
        lines,
        currentTetro: { type, direction, x, y },
        nextTetro,
        isPlay
      } = prevState;
      const newX = x + 1;
      const newY = y + 1;
      const isOccupied = occupied(type)(direction)(newX)(newY);
      return {
        board: isOccupied ? board : [[]], // TODO here print the board
        score,
        level,
        lines,
        currentTetro: {
          type,
          direction,
          x: isOccupied ? x : newX,
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

// TODOS
// Think in order of reducer, so I can write all my action where I appl the logic to change the state
// - create function which render the block on the board
