import Discord from 'discord.js'

import Message from '../types/Message'
import availableHelpChannel from '../embeds/availableHelpChannel'
import languages from '../constants/languages/languages'

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
      if (!msg.embeds[0] || msg.embeds[0].title !== availableHelpChannel().title) subChannel.setParent(BUSY_CHANNEL_ID) 
      break
  }

  await setHelpChannelPermissions(channel, msg)
}

export const setHelpChannelPermissions = async (channel: Discord.TextChannel | Discord.DMChannel | Discord.NewsChannel | undefined, msg: Discord.Message | Discord.PartialMessage) => {
  const subChannel = channel as Discord.TextChannel | Discord.NewsChannel

  if (!msg || !msg.guild) return

  const roleToAssign = subChannel.name.split('-')[0]
  const { roleID } = languages.filter(lang => lang.name === roleToAssign)[0]
  const role = msg.guild.roles.cache.get(roleID)

  if (!role) return

  await subChannel.overwritePermissions([
    { id: '877273210540920852', deny: ['VIEW_CHANNEL']},
    { id: role.id, allow: ['VIEW_CHANNEL']}
  ])
}

export default helpChannel
