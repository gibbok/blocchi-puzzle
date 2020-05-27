import { Tetro, Board } from '../game/types';

export const logger = (x: Tetro | Board): void => {
  console.log(x.reduce((acc, v) => `${acc} ${v.concat()} \n`, ''));
};
