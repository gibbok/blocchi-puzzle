import React from 'react';
import styled from 'styled-components';
import { PadRotate, PadLeft, PadRight, PadDown } from './Pad';

const NavigationStyled = styled.div`
  padding: 2vmin 1vmin 0 1vmin;
  display: flex;
  justify-content: space-between;
  width: 100%;
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
