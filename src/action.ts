import { Action, ActionEnum } from './types';
import { createAction } from 'redux-starter-kit';

export const moveDown: Action = createAction(ActionEnum.MoveDown);
export const moveRight: Action = createAction(ActionEnum.MoveRight);
export const moveLeft: Action = createAction(ActionEnum.MoveLeft);
export const moveUp: Action = createAction(ActionEnum.MoveUp);
export const checkBoard: Action = createAction(ActionEnum.CheckBoard);
