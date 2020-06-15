import React from 'react';
import styled from 'styled-components';
import { PadRotate, PadLeft, PadRight, PadDown } from './Pad';
import { mq_o } from '../game/settings';

const NavigationStyled = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  ${mq_o.l} {
    width: 35rem;
  }
  ${mq_o.p} {
    flex-direction: column;
    height: 35rem;
    align-items: center;
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
