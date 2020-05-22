import React from 'react';
import styled from 'styled-components';
import { Pad } from './Pad';

const NavigationStyled = styled.div`
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

export function Navigation({ onClickLeft, onClickRight, onClickDown, onClickRotate }: Props) {
  return (
    <NavigationStyled>
      <Pad onClick={onClickLeft} icon="<" />
      <Pad onClick={onClickRight} icon=">" />
      <Pad onClick={onClickDown} icon="|" />
      <Pad onClick={onClickRotate} icon="r" />
    </NavigationStyled>
  );
}
