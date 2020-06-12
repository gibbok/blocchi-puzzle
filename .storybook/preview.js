require('loki/configure-react')
const { addParameters } = require('@storybook/react')
const { create } = require('@storybook/theming/create')

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Blocchi puzzle',
    }),
  },
})
