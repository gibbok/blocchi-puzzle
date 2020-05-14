import React from 'react';
import { Controls, PlayState } from 'react-gsap';

type Props = Readonly<{
  children?: React.ReactNode;
}>;

export function GsapControls({ children }: Props) {
  return <Controls playState={PlayState.stop}>{children}</Controls>;
}
