import { IntegrationDefinition, messages } from '@botpress/sdk'
import { name } from './package.json'

export default new IntegrationDefinition({
  name,
  description: 'This is my first integration! Wahoo!',
  version: '0.2.0',
  channels: {
    channel: {
      messages: { ...messages.defaults },
    },
  },
})
