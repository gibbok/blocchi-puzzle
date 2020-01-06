import * as React from 'react';
import styled from 'styled-components';
import { Tile as TileType, NoTetroEnum } from '../game';
import { TITLE_COLOR_ENUM, TILE_COLOR_NOTETRO } from '../game/settings';

type Props = {
  variant: TileType;
};

const StyledTile = styled.div<Props>`
  background: ${({ variant }) =>
    variant === NoTetroEnum.NoTetro ? TILE_COLOR_NOTETRO : TITLE_COLOR_ENUM[variant]};
  width: 90%;
  height: 90%;
`;

export const Tile = ({ variant }: Props) => <StyledTile variant={variant} />;
