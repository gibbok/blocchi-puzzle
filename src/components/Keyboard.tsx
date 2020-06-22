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

const THROTTLE_MS = 60;

type Props = Readonly<{
  detectionKeyRepeat: DetectorKeyRepeat;
}>;

export const handleKeydown = (
  dkr: DetectorKeyRepeat,
  up: () => void,
  right: () => void,
  down: () => void,
  left: () => void
) => (keyCode: string, repeat: boolean): void => {
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

  const hkd = handleKeydown(
    detectionKeyRepeat,
    () => dispatch(moveUp()),
    () => dispatch(moveRight()),
    () => dispatch(moveDownThunk()),
    () => dispatch(moveLeft())
  );

  const cleanUpHandleKeydown = () => {
    document.removeEventListener('keydown', (e) => hkd(e.code, e.repeat));
    document.removeEventListener('keyup', () => detectionKeyRepeat.set(false));
  };

  useEffect(() => {
    document.addEventListener(
      'keydown',
      throttle(THROTTLE_MS, (e) => hkd(e.code, e.repeat))
    );
    document.addEventListener('keyup', () => detectionKeyRepeat.set(false));
    return cleanUpHandleKeydown;
  }, []);

  return <></>;
};
