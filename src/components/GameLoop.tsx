import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Action } from '@reduxjs/toolkit';

type Props = Readonly<{ level: number; cb: () => void }>;

const TICK_MS = 800;

const calcTimeClockByLevel = (base: number, level: number) => base - level * 100;

let animId = -1;

export const GameLoop = ({ level, cb }: Props) => {
  const dispatch = useDispatch();
  const [lastTime, setLastTime] = React.useState(0);

  const loop = (time: number): void | Action => {
    const threshold = calcTimeClockByLevel(TICK_MS, level);
    const progress = time - lastTime;
    const canGameAdvance = progress >= threshold;
    if (canGameAdvance) {
      setLastTime(time);
      dispatch(cb());
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
