import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { globalStylesDecorator, pageBackground } from '../src/utils/storybook';
import { Pad } from '../src/components/Pad';
import { action } from '@storybook/addon-actions';

storiesOf('Pad', module)
  .addDecorator(globalStylesDecorator)
  .addDecorator(pageBackground)
  .add('base', () => <Pad icon="<" onClick={action('onClick')} />);
