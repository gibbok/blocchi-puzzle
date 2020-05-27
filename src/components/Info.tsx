import * as React from 'react';
import styled from 'styled-components';
import 'typeface-oleo-script';
import { wood } from '../assets/images';

const InfoStyled = styled.div`
  width: 100%;
  height: 8rem;
`;

export const Group = styled.div`
  font-family: 'Oleo Script', cursive;
  font-size: 4rem;
  color: #442217;
  opacity: 0.8;
  text-shadow: 0 0.1rem 0 rgba(255, 255, 255, 0.4), 0 -0.1rem 0 rgba(0, 0, 0, 0.8);
  padding: 3.5rem 0 3.5rem 0;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
`;

const Divider = styled.div`
  position: relative;
  height: 0.1rem;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 0.1rem;
    background-image: linear-gradient(to right, transparent, rgb(48, 49, 51), transparent);
  }
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -0.7rem;
    left: calc(50% - 0.7rem);
    width: 1.4rem;
    height: 1.4rem;
    transform: rotate(45deg);
    background-image: url(${wood});
    border: 0.1rem solid rgb(48, 49, 51);
    box-shadow: inset 0.1rem 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.4);
  }
`;

export const Info = ({
  score,
  level,
  lines,
}: {
  score: number;
  level: number;
  lines: number;
}): JSX.Element => (
  <InfoStyled>
    <Group>
      <Line>Score</Line>
      <Line>{score}</Line>
    </Group>
    <Divider />
    <Group>
      <Line>Level</Line>
      <Line>{level}</Line>
    </Group>
    <Divider />
    <Group>
      <Line>Lines</Line>
      <Line>{lines}</Line>
    </Group>
  </InfoStyled>
);
