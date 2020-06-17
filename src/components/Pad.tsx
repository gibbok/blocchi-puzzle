import React from 'react';
import styled from 'styled-components';
import { wood } from '../assets/images';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowDown,
  RotateRight,
} from '@styled-icons/material';
import { StyledIconBase } from '@styled-icons/styled-icon';

const PadStyled = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
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

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    width: 4.5rem;
    height: 4.5rem;
    color: #5c3e2e;
    opacity: 0.8;
    transform: rotate(-90deg);
  }
`;

const Shadow = styled.div`
  filter: drop-shadow(-0.2rem 0.3rem 0.3rem rgba(50, 50, 0, 0.4));
`;

type PadProps = Readonly<{
  icon: React.ReactNode;
  onClick: () => void;
}>;

type PadSpecific = Omit<PadProps, 'icon'>;

export function Pad({ icon, onClick }: PadProps): JSX.Element {
  return (
    <Shadow>
      <PadStyled onClick={onClick}>
        <PadBackground>{icon}</PadBackground>
      </PadStyled>
    </Shadow>
  );
}

export function PadLeft({ onClick }: PadSpecific): JSX.Element {
  return (
    <Pad
      onClick={onClick}
      icon={
        <IconStyleWrapper>
          <KeyboardArrowLeft />
        </IconStyleWrapper>
      }
    />
  );
}

export function PadRight({ onClick }: PadSpecific): JSX.Element {
  return (
    <Pad
      onClick={onClick}
      icon={
        <IconStyleWrapper>
          <KeyboardArrowRight />
        </IconStyleWrapper>
      }
    />
  );
}
export function PadDown({ onClick }: PadSpecific): JSX.Element {
  return (
    <Pad
      onClick={onClick}
      icon={
        <IconStyleWrapper>
          <KeyboardArrowDown />
        </IconStyleWrapper>
      }
    />
  );
}
export function PadRotate({ onClick }: PadSpecific): JSX.Element {
  return (
    <Pad
      onClick={onClick}
      icon={
        <IconStyleWrapper>
          <RotateRight />
        </IconStyleWrapper>
      }
    />
  );
}
