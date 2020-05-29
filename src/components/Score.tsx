import * as React from 'react';
import styled from 'styled-components';
import { Group, Line } from './Info';

type Props = Readonly<{
  score: number;
  level: number;
}>;

const ScoreStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 7vmin;
`;

export function Score({ score, level }: Props): JSX.Element {
  return (
    <ScoreStyled>
      <Group>
        <Line>Score</Line>
        <Line>{score}</Line>
      </Group>
      <Group>
        <Line>Level</Line>
        <Line>{level}</Line>
      </Group>
    </ScoreStyled>
  );
}
