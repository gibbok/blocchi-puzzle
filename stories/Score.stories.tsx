import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { globalStylesDecorator, pageBackground } from '../src/utils/storybook';
import { Score } from '../src/components/Score';

storiesOf('Score', module)
  .addDecorator(globalStylesDecorator)
  .addDecorator(pageBackground)
  .add('base', () => <Score score={1500} level={3} />);
