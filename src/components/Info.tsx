import * as React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
  background-color: orange;
`;

export const Info = ({ score, level, lines }: { score: number; level: number; lines: number }) => (
  <StyledInfo>
    Score: {score} / Level:{level} / Lines: {lines}
  </StyledInfo>
);
