import Discord from 'discord.js'

import { getVariables } from './message'
import { setHelpChannelPermissions } from '../commands/helpChannel'
import { AVAILABLE_HELP_CHANNEL_ID } from '../commands/helpChannel'

import Params from '../types/Params'
import availableHelpChannel from '../embeds/availableHelpChannel'

const messageDelete = async ({ client, msg }: Params) => {
  if (!msg) return

  const { channel, isHelpChannel } = getVariables(msg as Discord.Message)
  const subChannel = channel as Discord.TextChannel | Discord.NewsChannel

  if (isHelpChannel) {
    const message =  await subChannel.messages.fetch({limit: 1})
    const lastMessage = message.first()

    if (!lastMessage || !lastMessage.embeds[0]) return
    if (lastMessage.embeds[0].title !== availableHelpChannel().title) return

    subChannel.setParent(AVAILABLE_HELP_CHANNEL_ID)
    await setHelpChannelPermissions(channel, msg)
  }
}

export default messageDelete