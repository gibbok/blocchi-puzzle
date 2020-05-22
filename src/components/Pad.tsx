import React from 'react';
import styled from 'styled-components';
import { wood } from '../assets/images';

const PadStyled = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  font-size: 5rem;
  font-family: sans-serif;
  box-shadow: inset 0.1rem 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.4);
  background: linear-gradient(180deg, rgba(33, 14, 8, 1) 0%, rgba(118, 80, 57, 1) 100%);
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 5px;
  left: 5px;
  width: calc(8rem - 10px);
  height: calc(8rem - 10px);
  background-image: url(${wood});
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  box-shadow: inset -8px 8px 20px 0px rgba(0, 0, 0, 0.4);
`;

type Props = Readonly<{
  icon: string;
  onClick: () => void;
}>;

export function Pad({ icon, onClick }: Props) {
  return (
    <PadStyled onClick={onClick}>
      <Content>{icon}</Content>
    </PadStyled>
  );
}
