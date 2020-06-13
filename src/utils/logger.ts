import { Tetro, Board } from '../game/types';

/**
 * Utility function to pretty log a board or tetromino.
 * @param x Tetromino or board
 */
export const logger = (x: Tetro | Board): void => {
  console.log(x.reduce((acc, v) => `${acc} ${v.concat()} \n`, ''));
};
