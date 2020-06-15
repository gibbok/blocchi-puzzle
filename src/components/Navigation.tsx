import React from 'react';
import styled from 'styled-components';
import { PadRotate, PadLeft, PadRight, PadDown } from './Pad';
import { mq_o, mq } from '../game/settings';

const NavigationStyled = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  ${mq_o.l} {
    width: 35rem;
    ${mq.sm} {
      width: 29rem;
    }
  }
  ${mq_o.p} {
    flex-direction: column;
    height: 35rem;
    align-items: center;
    ${mq.sm} {
      position: fixed;
      left: 0;
      bottom: 1rem;
      height: 8rem;
      flex-direction: row;
      width: 100%;
    }
  }
`;

type Props = Readonly<{
  onClickLeft: () => void;
  onClickRight: () => void;
  onClickDown: () => void;
  onClickRotate: () => void;
}>;

export function Navigation({
  onClickLeft,
  onClickRight,
  onClickDown,
  onClickRotate,
}: Props): JSX.Element {
  return (
    <NavigationStyled>
      <PadLeft onClick={onClickLeft} />
      <PadRotate onClick={onClickRotate} />
      <PadDown onClick={onClickDown} />
      <PadRight onClick={onClickRight} />
    </NavigationStyled>
  );
}
