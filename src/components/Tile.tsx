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
  width: 100%;
  height: 100%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SHORT = 15;
const LONG = 85;

const UpSide = styled.div`
  position: absolute;
  top: 0;
  background-color: green;
  width: 100%;
  height: ${`${SHORT}%`};
  clip-path: ${`polygon(0 0, 100% 0, ${LONG}% 100%, ${SHORT}% 100%)`};
`;

const DownSide = styled.div`
  position: absolute;
  bottom: 0;
  background-color: red;
  width: 100%;
  height: ${`${SHORT}%`};
  clip-path: ${`polygon(SHORT 0%, ${LONG}% 0%, 100% 100%, 0% 100%)`};
`;

const LeftSide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: yellow;
  width: ${`${SHORT}%`};
  height: 100%;
  clip-path: ${`polygon(0 0, 100% ${SHORT}%, 100% ${LONG}%, 0 100%)`};
`;

const RightSide = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: pink;
  width: ${`${SHORT}%`};
  height: 100%;
  clip-path: ${`polygon(0 ${SHORT}%, 100% 0, 100% 100%, 0 ${LONG}%)`};
`;

const TopSide = styled.div`
  position: absolute;
  top: ${`${SHORT}%`};
  right: ${`${SHORT}%`};
  width: ${`${LONG - SHORT}%`};
  height: ${`${LONG - SHORT}%`};
  background-color: transparent;
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
