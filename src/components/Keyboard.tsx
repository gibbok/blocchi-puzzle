import React, { useEffect } from 'react';
import { KeyEnum } from '~game/types';
import { useDispatch } from 'react-redux';
import { gameSlice } from '~store';
const {
  actions: { moveLeft, moveUp, moveRight, moveDown }
} = gameSlice;

type Props = Readonly<{}>;

export const Keyboard = ({}: Props) => {
  const dispatch = useDispatch();

  useEffect(() =>
    document.addEventListener('keydown', ({ keyCode }) => {
      switch (keyCode) {
        case KeyEnum.Esc:
          break;
        case KeyEnum.Space:
          break;
        case KeyEnum.Left:
          dispatch(moveLeft());
          break;
        case KeyEnum.Up:
          dispatch(moveUp());
          break;
        case KeyEnum.Right:
          dispatch(moveRight());
          break;
        case KeyEnum.Down:
          dispatch(moveDown());
          break;
      }
    })
  );
  return <></>;
};
