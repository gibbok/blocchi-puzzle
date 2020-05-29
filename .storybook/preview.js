// require('loki/configure-react')
const { addParameters } = require('@storybook/react')
const { create } = require('@storybook/theming/create')
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'fp-tetris',
    }),
  },
})
