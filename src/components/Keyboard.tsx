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

const handleKeydown = (dkr: DetectorKeyRepeat) => (
  left: () => void,
  up: () => void,
  right: () => void,
  down: () => void
) => ({ keyCode, repeat }: KeyboardEvent) => {
  dkr.set(repeat);

  switch (keyCode) {
    case KeyEnum.Left:
      left();
      break;
    case KeyEnum.Up:
      up();
      break;
    case KeyEnum.Right:
      right();
      break;
    case KeyEnum.Down:
    case KeyEnum.Space:
      down();
      break;
  }
};

export const Keyboard = ({ detectionKeyRepeat }: Props): JSX.Element => {
  const dispatch = useDispatch();

  const hkd = handleKeydown(detectionKeyRepeat)(
    () => dispatch(moveLeft()),
    () => dispatch(moveUp()),
    () => dispatch(moveRight()),
    () => dispatch(moveDownThunk())
  );

  const cleanUpHandleKeydown = () => document.removeEventListener('keydown', hkd);

  useEffect(() => {
    document.addEventListener('keydown', throttle(THROTTLE_MS, hkd));
    return cleanUpHandleKeydown;
  });
  return <></>;
};
