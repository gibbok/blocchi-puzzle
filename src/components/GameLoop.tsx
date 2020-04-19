import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { gameSlice } from '~store';
import { Action } from '@reduxjs/toolkit';
const {
  actions: { moveDown }
} = gameSlice;

type Props = Readonly<{ level: number }>;

let animId = -1;

export const GameLoop = ({ level }: Props) => {
  const dispatch = useDispatch();
  const [lastTime, setLastTime] = React.useState(0);

  const loop = (time: number): void | Action => {
    console.log('level', level);
    const progress = time - lastTime;
    if (progress >= 1000) {
      // TODO change speed based on level
      setLastTime(time);
      return dispatch(moveDown());
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
