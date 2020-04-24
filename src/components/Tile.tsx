import * as React from 'react';
import styled from 'styled-components';
import { Tile as TileType, NoTetroEnum } from '../game/types';
import { TILE_COLOR_NOTETRO, TITLE_COLOR_ENUM } from '../game/settings';

type Props = {
  debug?: Readonly<{ x: number; y: number }>;
  variant: TileType;
};

const StyledTile = styled.div<Props>`
  background: ${({ variant }) =>
    variant === NoTetroEnum.NoTetro ? TILE_COLOR_NOTETRO : TITLE_COLOR_ENUM[variant]};
  width: 90%;
  height: 90%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Tile = ({ variant, debug }: Props) => (
  <StyledTile variant={variant} debug={debug}>
    {debug && `${debug?.x} / ${debug?.y}`}
  </StyledTile>
);
