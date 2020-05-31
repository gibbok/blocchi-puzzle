import * as React from 'react';
import styled from 'styled-components';
import { Tile as TileType, NoTetro } from '../game/types';
import { TITLE_COLOR_ENUM } from '../game/settings';
import { dots } from '../assets/patterns';

type Props = {
  variant: TileType;
};

const TileStyled = styled.div<Props>`
  position: relative;
  background: ${({ variant }) => (variant === NoTetro ? `${dots}` : TITLE_COLOR_ENUM[variant])};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(1% 0%, 99% 0%, 100% 1%, 100% 99%, 99% 100%, 1% 100%, 0% 99%, 0% 1%);
  box-shadow: ${({ variant }) =>
    variant === NoTetro
      ? 'inset 0.1rem 0.1rem 0.1rem 0.1rem rgba(255,255,255, 0.01), inset -0.1rem -0.1rem 0.1rem 0.1rem rgba(0,0,0, 0.02)'
      : 'none'};
  border: ${({ variant }) => (variant === NoTetro ? '0.1rem solid rgba(0, 0, 0, 0.1)' : 'none')};
`;

const SHORT = 25;
const LONG = 75;
const OPACTITY = 1;
const BLUR = 0.1;

const UpSide = styled.div`
  position: absolute;
  top: 0;
  background-color: green;
  width: 100%;
  height: ${`${SHORT}%`};
  clip-path: ${`polygon(0 0, 100% 0, ${LONG}% 100%, ${SHORT}% 100%)`};
  background: linear-gradient(190deg, rgba(100, 100, 100, 0.1) 0%, rgba(255, 255, 255, 0.7) 100%);
  opacity: ${OPACTITY};
  filter: ${`blur(${BLUR}rem)`};
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
  filter: ${`blur(${BLUR}rem)`};
`;

const LeftSide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${`${SHORT}%`};
  height: 100%;
  clip-path: ${`polygon(0 0, 100% ${SHORT}%, 100% ${LONG}%, 0 100%)`};
  background: linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.6) 100%);
  opacity: ${OPACTITY};
  filter: ${`blur(${BLUR}rem)`};
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
  filter: ${`blur(${BLUR}rem)`};
`;

const TopSide = styled.div`
  position: absolute;
  top: ${`${SHORT}%`};
  right: ${`${SHORT}%`};
  width: ${`${LONG - SHORT}%`};
  height: ${`${LONG - SHORT}%`};
  opacity: ${OPACTITY};
  background: linear-gradient(0deg, rgba(120, 120, 120, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%);
  filter: ${`blur(${BLUR * 2})`};
`;

const Shadow = styled.div<{ variant: TileType }>`
  width: 100%;
  height: 100%;
  filter: ${({ variant }) =>
    variant === NoTetro ? 'none' : 'drop-shadow(0.3vmin 0.3vmin 0.3vmin rgba(50, 50, 0, 0.5))'};
`;

export function Tile({ variant }: Props): JSX.Element {
  return (
    <Shadow variant={variant}>
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
    </Shadow>
  );
}
