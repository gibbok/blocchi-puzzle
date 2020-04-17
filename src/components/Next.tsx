import * as React from 'react';
import { TetroDef } from '~game/types';
// import styled from 'styled-components';

export const Next = ({ nextTetro }: { nextTetro: TetroDef }) => (
  <div>{JSON.stringify(nextTetro)}</div>
);
