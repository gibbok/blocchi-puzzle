import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tile } from '../src/components/Tile';
import { TetroEnum } from '../src/game/types';

storiesOf('Tile', module).add('I', () => <Tile variant={TetroEnum.I} debug={{ x: 10, y: 20 }} />);
