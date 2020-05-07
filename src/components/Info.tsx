import * as React from 'react';
import styled from 'styled-components';
import 'typeface-oleo-script';

const StyledInfo = styled.div``;

const Plate = styled.div`
  /* background-color: #765039; */
  width: 16rem;
  height: 8rem;
  /* clip-path: polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%); */
  font-family: 'Oleo Script', cursive;
  font-size: 5rem;
  color: #442217;
  opacity: 0.8;
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.4), 0px -1px 0px rgba(0, 0, 0, 0.8);
`;

export const Info = ({ score, level, lines }: { score: number; level: number; lines: number }) => (
  <StyledInfo>
    <Plate>
      Score:
      {score}
      <br />
      Level:
      {level}
      <br />
      Lines:
      {lines}
    </Plate>
  </StyledInfo>
);
