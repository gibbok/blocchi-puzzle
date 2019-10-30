import * as React from 'react';
import { Board as BoardType } from '../game';

export const Board = ({ board }: { board: BoardType }) => <div>{JSON.stringify(board)}</div>;
