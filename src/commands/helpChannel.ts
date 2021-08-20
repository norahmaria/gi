import Discord from 'discord.js'

import Message from '../types/Message'
import availableHelpChannel from '../embeds/availableHelpChannel'

export const AVAILABLE_HELP_CHANNEL_ID = '877436250330628116'
export const BUSY_CHANNEL_ID = '877434463997538334'

const helpChannel = async ({ cmd, msg, channel }: Message) => {
  const subChannel = channel as Discord.TextChannel | Discord.NewsChannel
  
  switch (cmd) {
    case 'open':
      subChannel.setParent(AVAILABLE_HELP_CHANNEL_ID)
      await subChannel.send(availableHelpChannel())
      break

    default:
      if (!msg.embeds[0]) return subChannel.setParent(BUSY_CHANNEL_ID)
      if (msg.embeds[0].title !== availableHelpChannel().title) subChannel.setParent(BUSY_CHANNEL_ID)

      break
  }
}

export default helpChannel