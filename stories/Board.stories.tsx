import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tile } from '../src/components/Tile';
import { TetroEnum, NoTetro } from '../src/game/types';
import styled from 'styled-components';
import { Board } from '../src/components/Board';
import { BOARD_EMPTY, BOARD_RANDOM_S_1 } from '../src/utils/data.support.test';

storiesOf('Board', module)
  .add('non empty', () => <Board board={BOARD_RANDOM_S_1} />)
  .add('empty', () => <Board board={BOARD_EMPTY} />);
