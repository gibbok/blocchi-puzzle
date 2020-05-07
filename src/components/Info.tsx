import * as React from 'react';
import styled from 'styled-components';
import 'typeface-oleo-script';

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
  margin-bottom: 4rem;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
`;

export const Info = ({ score, level, lines }: { score: number; level: number; lines: number }) => (
  <InfoStyled>
    <Group>
      <Line>Score</Line>
      <Line>{score}</Line>
    </Group>
    <Group>
      <Line>Level</Line>
      <Line>{level}</Line>
    </Group>
    <Group>
      <Line>Lines</Line>
      <Line>{lines}</Line>
    </Group>
  </InfoStyled>
);
