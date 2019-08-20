import { Tetro, Board } from './types';

export const logger = (x: Tetro | Board) => {
  console.log(x.reduce((acc, v) => `${acc} ${v.concat()} \n`, ''));
};
