import { InternalState, Action, ActionEnum, TetroEnum, DirectionEnum } from './types';
import {
  mkEmptyBoard,
  addTetroToBoard,
  recFindAvailablePosY,
  recFindAvailablePosX,
  detectAndRemoveCompletedRows,
  getCompleteRowIdxs
} from './board';
import { occupied, rotateTetroDirectionACW } from './tetromino';
import { pipe } from 'fp-ts/lib/pipeable';
import { calcScore, calcLevel } from './game';

export const BOARD_TOT_BLOCK_X = 20;
export const BOARD_TOT_ROW_Y = 10;

export const mkInitialState = () => ({
  board: mkEmptyBoard(BOARD_TOT_BLOCK_X)(BOARD_TOT_ROW_Y),
  score: 0,
  level: 1,
  lines: 0,
  currentTetro: {
    type: TetroEnum.I, // TODO random
    direction: DirectionEnum.N, // TODO random
    x: 0,
    y: 0
  },
  nextTetro: {
    type: TetroEnum.S, // TODO random
    direction: DirectionEnum.N, // TODO randome
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
      const foundPosY = recFindAvailablePosY(type)(direction)(x)(newY)(board)(1);
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
      const newRightX = x + 1;
      const isOccupiedRight = occupied(type)(direction)(newRightX)(y)(board);
      const foundRightPosX = recFindAvailablePosX(type)(direction)(newRightX)(y)(board)(1);
      return {
        board: isOccupiedRight ? addTetroToBoard(type)(direction)(foundRightPosX)(y)(board) : board,
        score,
        level,
        lines,
        currentTetro: {
          type,
          direction,
          x: isOccupiedRight ? foundRightPosX : newRightX,
          y
        },
        nextTetro,
        isPlay
      };
    case ActionEnum.MoveLeft:
      const newLeftX = x - 1;
      const isOccupiedLeft = occupied(type)(direction)(newLeftX)(y)(board);
      const foundLeftPosX = recFindAvailablePosX(type)(direction)(newLeftX)(y)(board)(-1);
      return {
        board: isOccupiedLeft ? addTetroToBoard(type)(direction)(foundLeftPosX)(y)(board) : board,
        score,
        level,
        lines,
        currentTetro: {
          type,
          direction,
          x: isOccupiedLeft ? foundLeftPosX : newLeftX,
          y
        },
        nextTetro,
        isPlay
      };
    case ActionEnum.MoveUp:
      const directionNew = rotateTetroDirectionACW(direction);
      const isOccupiedUp = occupied(type)(directionNew)(x)(y)(board);
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
    case ActionEnum.CheckBoard:
      const totRowCompleted = getCompleteRowIdxs(board);
      const totRowCompletedLen = totRowCompleted.length;
      const newScore = pipe(
        totRowCompletedLen,
        calcScore
      );
      return {
        board: detectAndRemoveCompletedRows(board),
        score: newScore,
        level: calcLevel(newScore),
        lines: lines + totRowCompletedLen,
        currentTetro: { type, direction, x, y },
        nextTetro,
        isPlay
      };
    default:
      return prevState;
  }
};
