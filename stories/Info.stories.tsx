import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { globalStylesDecorator } from '../src/utils/storybook';
import { Info } from '../src/components/Info';

storiesOf('Info', module)
  .addDecorator(globalStylesDecorator)
  .add('level', () => <Info score={10} level={2} lines={5} />);
