import Discord from 'discord.js'

import Channels from '../types/Channels'
import { helpChannels } from '../constants/languages/languages'

const getChannelByTextName = (channels: Discord.Collection<string, Discord.GuildChannel> | undefined, textName: String): Discord.TextChannel => {
  const channel = channels?.filter(({ name }) => name === textName).first()
  return channel as Discord.TextChannel
}

const getHelpChannels = (channels: Discord.Collection<string, Discord.GuildChannel> | undefined) => {
  const textChannels: any = []
  const filter = channels?.filter(({ name }) => helpChannels.includes(name))
  filter?.forEach(channel => textChannels.push(channel as Discord.TextChannel))

  return textChannels
}

const getChannels = (client: Discord.Client): Channels => {
  const guild = client.guilds.cache.get(`${process.env.SERVER}`)
  const guildChannels = guild?.channels.cache

  const roles = getChannelByTextName(guildChannels, 'roles')
  const faq = getChannelByTextName(guildChannels, 'faq')
  const help = getHelpChannels(guildChannels)

  return { faq, roles, help }
}

export default getChannels