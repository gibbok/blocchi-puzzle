import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Action } from '@reduxjs/toolkit';
import { moveDownThunk } from '~store/board/actions/thunks';

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
      dispatch(moveDownThunk());
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
