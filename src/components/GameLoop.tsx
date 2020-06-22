import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppContextConsumer } from '../context';

const TICK_MS = 1000;

const calcTimeClockByLevel = (base: number, level: number) => base - level * (TICK_MS / 100);

let animId = -1;

export const loop = (
  time: number,
  level: number,
  lastTime: number,
  repeat: boolean,
  setLastTimeCb: (time: number) => void,
  cb: () => void,
  dispatchCb: (cb: () => void) => void
): void => {
  const isKeyHeld = repeat;
  const threshold = calcTimeClockByLevel(TICK_MS, level);
  const progress = time - lastTime;
  const canGameAdvance = progress >= threshold;
  if (canGameAdvance) {
    setLastTimeCb(time);
    if (!isKeyHeld) {
      dispatchCb(cb);
    }
    return undefined;
  }
  animId = window.requestAnimationFrame((time) =>
    loop(time, level, lastTime, repeat, setLastTimeCb, cb, () => dispatchCb(() => cb()))
  );
  return undefined;
};

type Props = Readonly<{ level: number; cb: () => void }>;

export const GameLoop = ({ level, cb }: Props): JSX.Element => {
  const { repeat } = useAppContextConsumer();
  const dispatch = useDispatch();
  const [lastTime, setLastTime] = React.useState(0);

  const cleanAnimation = (id: number) => window.cancelAnimationFrame(id);

  useEffect(() => {
    animId = window.requestAnimationFrame((time) =>
      loop(time, level, lastTime, repeat, setLastTime, cb, () => dispatch(cb()))
    );
    return () => cleanAnimation(animId);
  });
  return <></>;
};
