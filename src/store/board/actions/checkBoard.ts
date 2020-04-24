import { InternalState } from '~game/types';
import { getCompleteRowIdxs, calcScore, detectAndRemoveCompletedRows, calcLevel } from '~game';
import { pipe } from 'fp-ts/lib/pipeable';

export const checkBoard = (prevState: InternalState) => {
  const {
    board,
    lines,
    score,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay,
    isGameOver,
    screen
  } = prevState;
  const totRowCompleted = getCompleteRowIdxs(board);
  const totRowCompletedLen = totRowCompleted.length;
  const newScore = pipe(totRowCompletedLen, calcScore);
  const newScoreTotal = score + newScore;
  return {
    board: detectAndRemoveCompletedRows(board),
    score: newScoreTotal,
    level: calcLevel(newScoreTotal),
    lines: lines + totRowCompletedLen,
    currentTetro: { type, direction, x, y },
    nextTetro,
    isPlay,
    isGameOver,
    screen
  };
};
