import React, { useEffect } from 'react';
import { KeyEnum } from '../game/types';
import { useDispatch } from 'react-redux';
import { gameSlice } from '../store';
import { moveDownThunk } from '../store/board/actions/thunks';
import { useAppContextConsumer } from '../context';

const {
  actions: { moveLeft, moveUp, moveRight },
} = gameSlice;

const THRESHOLD_TIME_MS = 70;

let INITIAL_TIME_MS: number = new Date().valueOf();

export const canExecuteCbIfInTreshold = (
  baseTimeMs: number,
  currentTimeMs: number,
  executeCb: (currentTimeMs: number) => void
): undefined => {
  if (currentTimeMs - baseTimeMs > THRESHOLD_TIME_MS) {
    // INITIAL_TIME_MS = currentTimeMs;
    executeCb(currentTimeMs);
  }
  return undefined;
};

export const handleKeydown = (
  up: () => void,
  right: () => void,
  down: () => void,
  left: () => void
) => (keyCode: string): void => {
  switch (keyCode) {
    case KeyEnum.Left:
    case KeyEnum.KeyA:
      left();
      break;
    case KeyEnum.Up:
    case KeyEnum.Space:
    case KeyEnum.KeyW:
      up();
      break;
    case KeyEnum.Right:
    case KeyEnum.KeyD:
      right();
      break;
    case KeyEnum.Down:
    case KeyEnum.KeyS:
      down();
      break;
  }
};

export const Keyboard = (): JSX.Element => {
  const { setRepeat } = useAppContextConsumer();
  const dispatch = useDispatch();

  const hkd = handleKeydown(
    () => dispatch(moveUp()),
    () => dispatch(moveRight()),
    () => dispatch(moveDownThunk()),
    () => dispatch(moveLeft())
  );

  const cleanUpHandleKeydown = () => {
    document.removeEventListener('keydown', (e) => hkd(e.code));
  };

  useEffect(() => {
    document.addEventListener('keydown', (e) =>
      canExecuteCbIfInTreshold(INITIAL_TIME_MS, new Date().valueOf(), (currentTimeMs) => {
        INITIAL_TIME_MS = currentTimeMs;
        hkd(e.code);
      })
    );
    document.addEventListener('keyup', () => setRepeat(false));
    return cleanUpHandleKeydown;
  }, []);

  return <></>;
};
