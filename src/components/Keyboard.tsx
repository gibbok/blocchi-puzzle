import React, { useEffect } from 'react';
import { KeyEnum } from '../game/types';
import { useDispatch } from 'react-redux';
import { gameSlice } from '../store';
import { moveDownThunk } from '../store/board/actions/thunks';
import { throttle } from 'throttle-debounce';
import { DetectorKeyRepeat } from './detectorKeyRepeat';

const {
  actions: { moveLeft, moveUp, moveRight },
} = gameSlice;

const THROTTLE_MS = 100;

type Props = Readonly<{
  detectionKeyRepeat: DetectorKeyRepeat;
}>;

export const Keyboard = ({ detectionKeyRepeat }: Props) => {
  const dispatch = useDispatch();

  const handleKeydown = ({ keyCode, repeat }: KeyboardEvent) => {
    detectionKeyRepeat.set(repeat);

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
        dispatch(moveDownThunk());
        break;
    }
  };

  const cleanUpHandleKeydown = () => document.removeEventListener('keydown', handleKeydown);

  useEffect(() => {
    document.addEventListener('keydown', throttle(THROTTLE_MS, handleKeydown));
    return cleanUpHandleKeydown;
  });
  return <></>;
};
