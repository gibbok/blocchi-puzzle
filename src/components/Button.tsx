import styled from 'styled-components';
import React from 'react';
import { mq, PaletteEnum } from '../game/settings';

const ButtonElm = styled.button.attrs({
  'data-test': 'button',
});

const ButtonStyled = ButtonElm`
  cursor: pointer;
  border: none;
  display: block;
  font-size: 6rem;
  color: ${PaletteEnum.White};
  background: linear-gradient(
    0deg,
    rgba(50, 140, 0, 1) 0%,
    rgba(62, 171, 3, 1) 25%,
    rgba(69, 188, 4, 1) 85%,
    rgba(63, 173, 2, 1) 100%
  );
  border-radius: 1.3rem;
  box-shadow: 0 0.4rem 0.7rem 0 #165801, inset 0 0 0.4rem 0 #1a6f00;
  &:focus {
    outline: none;
  }
  ${mq.sm} {
    font-size: 2.5rem;
    border-radius: 0.5rem;
  }
  ${mq.md} {
    font-size: 4rem;
    border-radius: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem;
  user-select: none;
`;

type Props = Readonly<{
  children?: React.ReactNode;
  onClick: () => void;
}>;

export function Button({ children, onClick }: Props): JSX.Element {
  return (
    <ButtonStyled onClick={onClick}>
      <Content>{children}</Content>
    </ButtonStyled>
  );
}
