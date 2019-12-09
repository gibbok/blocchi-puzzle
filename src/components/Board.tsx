import * as React from 'react';
import { Board as BoardType, TetroEnum } from '../game';
import { Square } from './Square';

export const Board = ({ board }: { board: BoardType }) => (
  <div>
    <Square t={TetroEnum.I} />
    {JSON.stringify(board)}
  </div>
);
