import * as React from 'react';
import styled from 'styled-components';
import { Tile as TileType, NoTetro } from '../game/types';
import { TILE_COLOR_NOTETRO, TITLE_COLOR_ENUM } from '../game/settings';

type Props = {
  variant: TileType;
};

const TileStyled = styled.div<Props>`
  position: relative;
  background: ${({ variant }) =>
    variant === NoTetro ? TILE_COLOR_NOTETRO : TITLE_COLOR_ENUM[variant]};
  width: 95%;
  height: 95%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SHORT = 50;
const LONG = 50;
const OPACTITY = 1;
const BLUR = 0.25;

const UpSide = styled.div`
  position: absolute;
  top: 0;
  background-color: green;
  width: 100%;
  height: ${`${SHORT}%`};
  clip-path: ${`polygon(0 0, 100% 0, ${LONG}% 100%, ${SHORT}% 100%)`};
  background: linear-gradient(190deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.5) 100%);
  opacity: ${OPACTITY};
  filter: blur(1rem);
`;

const DownSide = styled.div`
  position: absolute;
  bottom: 0;
  background-color: red;
  width: 100%;
  height: ${`${SHORT}%`};
  clip-path: ${`polygon(${SHORT}% 0%, ${LONG}% 0%, 100% 100%, 0% 100%)`};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);
  opacity: ${OPACTITY};
  filter: ${`blur(${BLUR})`};
`;

const LeftSide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: yellow;
  width: ${`${SHORT}%`};
  height: 100%;
  clip-path: ${`polygon(0 0, 100% ${SHORT}%, 100% ${LONG}%, 0 100%)`};
  background: linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.6) 100%);
  opacity: ${OPACTITY};
  filter: ${`blur(${BLUR})`};
`;

const RightSide = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: pink;
  width: ${`${SHORT}%`};
  height: 100%;
  clip-path: ${`polygon(0 ${SHORT}%, 100% 0, 100% 100%, 0 ${LONG}%)`};
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(128, 128, 128, 0) 50%,
    rgba(255, 255, 255, 0.5) 100%
  );
  opacity: ${OPACTITY};
  filter: ${`blur(${BLUR})`};
`;

const TopSide = styled.div`
  position: absolute;
  top: ${`${SHORT}%`};
  right: ${`${SHORT}%`};
  width: ${`${LONG - SHORT}%`};
  height: ${`${LONG - SHORT}%`};
  opacity: ${OPACTITY};
  background: linear-gradient(180deg, rgba(120, 120, 120, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%);
  filter: ${`blur(${BLUR})`};
`;

export const Tile = ({ variant }: Props) => (
  <TileStyled variant={variant}>
    {variant !== NoTetro && (
      <>
        <UpSide />
        <DownSide />
        <LeftSide />
        <RightSide />
        <TopSide />
      </>
    )}
  </TileStyled>
);
