import styled from 'styled-components';
import React from 'react';

const ButtonStyled = styled.button`
  display: block;
  font-size: 2.5rem;
  color: white;
  background-color: #cc4331;
  border-radius: 0.5rem;
  text-shadow: 0 -1px -1px #af3a2a;
  box-shadow: 0 4px 0 #af3a2a, 0 5px 5px 1px rgba(0, 0, 0, 0.4);
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

export function Button({ children, onClick }: Props) {
  return (
    <ButtonStyled onClick={onClick}>
      <Content>{children}</Content>
    </ButtonStyled>
  );
}
