import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Action } from '@reduxjs/toolkit';
import { DetectorKeyRepeat } from './detectorKeyRepeat';

const TICK_MS = 800;

const calcTimeClockByLevel = (base: number, level: number) => base - level * 100;

let animId = -1;

type Props = Readonly<{ level: number; detectionKeyRepeat: DetectorKeyRepeat; cb: () => void }>;

export const GameLoop = ({ level, detectionKeyRepeat, cb }: Props) => {
  const dispatch = useDispatch();
  const [lastTime, setLastTime] = React.useState(0);

  const loop = (time: number): void | Action => {
    const isKeyHeld = detectionKeyRepeat.get();
    const threshold = calcTimeClockByLevel(TICK_MS, level);
    const progress = time - lastTime;
    const canGameAdvance = progress >= threshold;
    if (canGameAdvance) {
      setLastTime(time);
      if (!isKeyHeld) {
        dispatch(cb());
      }
      return undefined;
    }
    animId = window.requestAnimationFrame(loop);
    return undefined;
  };

  const cleanAnimation = (id: number) => window.cancelAnimationFrame(id);

  useEffect(() => {
    animId = window.requestAnimationFrame(loop);
    return () => cleanAnimation(animId);
  });
  return <></>;
};
