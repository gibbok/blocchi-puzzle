import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DetectorKeyRepeat } from './detectorKeyRepeat';

const TICK_MS = 1000;

const calcTimeClockByLevel = (base: number, level: number) => base - level * (TICK_MS / 100);

let animId = -1;

export const loop = (
  time: number,
  level: number,
  lastTime: number,
  detectionKeyRepeat: DetectorKeyRepeat,
  setLastTimeCb: (time: number) => void,
  cb: () => void,
  dispatchCb: (cb: () => void) => void
): void => {
  const isKeyHeld = detectionKeyRepeat.get();
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
    /* istanbul ignore next */
    loop(time, level, lastTime, detectionKeyRepeat, setLastTimeCb, cb, () => dispatchCb(() => cb()))
  );
  return undefined;
};

type Props = Readonly<{ level: number; detectionKeyRepeat: DetectorKeyRepeat; cb: () => void }>;

export const GameLoop = ({ level, detectionKeyRepeat, cb }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const [lastTime, setLastTime] = React.useState(0);

  const cleanAnimation = (id: number) => window.cancelAnimationFrame(id);

  useEffect(() => {
    animId = window.requestAnimationFrame((time) =>
      /* istanbul ignore next */
      loop(time, level, lastTime, detectionKeyRepeat, setLastTime, cb, () => dispatch(cb()))
    );
    return () => cleanAnimation(animId);
  });
  return <></>;
};
