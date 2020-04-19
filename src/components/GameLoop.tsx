import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { gameSlice } from '~store';
const {
  actions: { moveDown }
} = gameSlice;

type Props = Readonly<{}>;

export const GameLoop = ({}: Props) => {
  const dispatch = useDispatch();
  const [frameCount, setFrameCount] = React.useState(0);

  const handleKeydown = (time: number) => {
    setFrameCount(frameCount + 1);
    if (frameCount === 60) {
      setFrameCount(0);
      return dispatch(moveDown());
    }
  };

  const cleanAnimation = (id: number) => window.cancelAnimationFrame(id);

  const animate = () => window.requestAnimationFrame(handleKeydown);

  useEffect(() => {
    const animId = animate();
    return () => cleanAnimation(animId);
  });
  return <></>;
};
