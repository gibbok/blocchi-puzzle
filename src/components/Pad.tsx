import React from 'react';
import styled from 'styled-components';
import { wood } from '../assets/images';

const PadStyled = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  border-radius: 4rem;
  font-size: 5rem;
  font-family: sans-serif;
  box-shadow: inset 0.1rem 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.4);
  transform: rotate(90deg);
  clip-path: circle(50% at 50% 50%);
  border: 0.2rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.12);
`;

const PadBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${wood});
  clip-path: circle(50% at 50% 50%);
`;

const Shadow = styled.div`
  filter: drop-shadow(-0.2rem 0.3rem 0.3rem rgba(50, 50, 0, 0.4));
`;

type Props = Readonly<{
  icon: React.ReactNode;
  onClick: () => void;
}>;

export function Pad({ icon, onClick }: Props) {
  return (
    <Shadow>
      <PadStyled onClick={onClick}>
        <PadBackground>{icon}</PadBackground>
      </PadStyled>
    </Shadow>
  );
}
