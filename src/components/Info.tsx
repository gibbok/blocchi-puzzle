import * as React from 'react';
import styled from 'styled-components';
import 'typeface-oleo-script';
import { wood } from '../assets/images';

const InfoStyled = styled.div`
  width: 100%;
  height: 8rem;
`;

const Group = styled.div`
  font-family: 'Oleo Script', cursive;
  font-size: 4rem;
  color: #442217;
  opacity: 0.8;
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.4), 0px -1px 0px rgba(0, 0, 0, 0.8);
  padding: 3rem 0 3rem 0;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
`;

const Divider = styled.div`
  position: relative;
  height: 1px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 1px;
    background-image: linear-gradient(to right, transparent, rgb(48, 49, 51), transparent);
  }
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -7px;
    left: calc(50% - 7px);
    width: 14px;
    height: 14px;
    transform: rotate(45deg);
    background-image: url(${wood});
    /* background: linear-gradient(0deg, rgb(100, 68, 51) 0%, rgb(161, 122, 100) 100%); */
    /* background: linear-gradient(
      125deg,
      rgba(224, 193, 153, 0) 0%,
      rgb(224, 193, 153) 20%,
      rgb(225, 195, 155) 100%
    ); */
    /* background-color: #e0c096; */
    border-bottom: 1px solid rgb(48, 49, 51);
    border-right: 1px solid rgb(48, 49, 51);
  }
`;

export const Info = ({ score, level, lines }: { score: number; level: number; lines: number }) => (
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
