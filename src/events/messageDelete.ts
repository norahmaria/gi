import Discord from 'discord.js'

import { getVariables } from './message'
import { AVAILABLE_HELP_CHANNEL_ID } from '../commands/helpChannel'

import availableHelpChannel from '../embeds/availableHelpChannel'
import Params from '../types/Params'

const messageDelete = ({ client, msg }: Params) => {
  if (!msg) return

  const { channel, isHelpChannel } = getVariables(msg as Discord.Message)
  const subChannel = channel as Discord.TextChannel | Discord.NewsChannel

  if (isHelpChannel) {
    subChannel.messages.fetch({limit: 1})
      .then(messages => {
        const lastMessage = messages.first()
          
        if (lastMessage) {
          if (lastMessage.embeds[0].title === availableHelpChannel().title) {
            subChannel.setParent(AVAILABLE_HELP_CHANNEL_ID)
          }
        }})
      .catch(console.error);
  }
}

export default messageDelete