import * as React from 'react';
import { Board as BoardType } from '../types';

export const Board = (board: BoardType) => <div>{JSON.stringify(board)}</div>;
