import React from 'react';
import styled from 'styled-components';
import { Pad } from './Pad';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowDown,
  RotateRight
} from '@styled-icons/material';
import { StyledIconBase } from '@styled-icons/styled-icon';

const NavigationStyled = styled.div`
  margin-top: 4.5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    width: 6rem;
    height: 6rem;
    color: #5c3e2e;
    opacity: 0.8;
    transform: rotate(-90deg);
  }
`;

type Props = Readonly<{
  onClickLeft: () => void;
  onClickRight: () => void;
  onClickDown: () => void;
  onClickRotate: () => void;
}>;

export function Navigation({ onClickLeft, onClickRight, onClickDown, onClickRotate }: Props) {
  return (
    <NavigationStyled>
      <Pad
        onClick={onClickLeft}
        icon={
          <IconStyleWrapper>
            <KeyboardArrowLeft />
          </IconStyleWrapper>
        }
      />
      <Pad
        onClick={onClickRight}
        icon={
          <IconStyleWrapper>
            <KeyboardArrowRight />
          </IconStyleWrapper>
        }
      />
      <Pad
        onClick={onClickDown}
        icon={
          <IconStyleWrapper>
            <KeyboardArrowDown />
          </IconStyleWrapper>
        }
      />
      <Pad
        onClick={onClickRotate}
        icon={
          <IconStyleWrapper>
            <RotateRight />
          </IconStyleWrapper>
        }
      />
    </NavigationStyled>
  );
}
