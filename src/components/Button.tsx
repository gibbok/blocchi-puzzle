import styled from 'styled-components';
import React from 'react';

const ButtonStyled = styled.button`
  cursor: pointer;
  border: none;
  display: block;
  font-size: clamp(3rem, 5vmin, 7rem);
  min-height: 6rem;
  color: white;
  background: linear-gradient(
    0deg,
    rgba(50, 140, 0, 1) 0%,
    rgba(62, 171, 3, 1) 25%,
    rgba(69, 188, 4, 1) 85%,
    rgba(63, 173, 2, 1) 100%
  );
  /* border-radius: 0.6rem; */
  border-radius: 1vmin;
  box-shadow: 0 0.4rem 0.7rem 0 #165801, inset 0 0 0.4rem 0 #1a6f00;
  &:focus {
    outline: none;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem;
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
