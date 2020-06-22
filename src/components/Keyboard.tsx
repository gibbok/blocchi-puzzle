import React, { useEffect } from 'react';
import { KeyEnum } from '../game/types';
import { useDispatch } from 'react-redux';
import { gameSlice } from '../store';
import { moveDownThunk } from '../store/board/actions/thunks';
import { throttle } from 'throttle-debounce';
import { useAppContextConsumer } from '../context';

const {
  actions: { moveLeft, moveUp, moveRight },
} = gameSlice;

const THROTTLE_MS = 60;
const THROTTLE_MS_SAFARI = 250;

export const handleKeydown = (
  setRepeat: (repeat: boolean) => void,
  up: () => void,
  right: () => void,
  down: () => void,
  left: () => void
) => (keyCode: string, repeat: boolean): void => {
  setRepeat(repeat);

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

const getThrottle = (browser?: string) =>
  browser && browser === 'safari' ? THROTTLE_MS_SAFARI : THROTTLE_MS;

export const Keyboard = (): JSX.Element => {
  const { browserInfo, setRepeat } = useAppContextConsumer();
  const dispatch = useDispatch();

  const throttleMs = getThrottle(browserInfo?.name);

  const hkd = handleKeydown(
    setRepeat,
    () => dispatch(moveUp()),
    () => dispatch(moveRight()),
    () => dispatch(moveDownThunk()),
    () => dispatch(moveLeft())
  );

  const cleanUpHandleKeydown = () => {
    document.removeEventListener('keydown', (e) => hkd(e.code, e.repeat));
    document.removeEventListener('keyup', () => setRepeat(false));
  };

  useEffect(() => {
    document.addEventListener(
      'keydown',
      throttle(throttleMs, (e) => hkd(e.code, e.repeat))
    );
    document.addEventListener('keyup', () => setRepeat(false));
    return cleanUpHandleKeydown;
  }, []);

  return <></>;
};
