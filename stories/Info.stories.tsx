import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { globalStylesDecorator } from '../src/utils/storybook';
import { Info } from '../src/components/Info';
import styled from 'styled-components';
import { wood } from '../src/assets/images';

const Bkg = styled.div`
  background-image: url(${wood});
  width: 100vw;
  height: 100vh;
`;

storiesOf('Info', module)
  .addDecorator(globalStylesDecorator)
  .add('level', () => (
    <Bkg>
      <Info score={10} level={2} lines={5} />
    </Bkg>
  ));
