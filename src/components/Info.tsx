import * as React from 'react';
import styled from 'styled-components';
import 'typeface-oleo-script';

const StyledInfo = styled.div`
  background-color: orange;
  font-family: 'Oleo Script', cursive;
`;

export const Info = ({ score, level, lines }: { score: number; level: number; lines: number }) => (
  <StyledInfo>
    Score: {score} / Level:{level} / Lines: {lines}
  </StyledInfo>
);
