import Discord from 'discord.js'

import Message from '../types/Message'
import { yellow } from '../constants/colors'

const suggestion = async ({ cmd, msg, channel }: Message) => {
  msg.delete()

  const subChannel = channel as Discord.TextChannel | Discord.NewsChannel
  if (!msg || msg?.author?.bot || !msg.author) return

  const avatar = msg.author.avatarURL()
  if (!avatar || avatar === undefined) return

  const user = msg.author.username

  const embed = new Discord.MessageEmbed()
    .setColor(yellow)
    .setAuthor(`Suggestion from ${user}`, avatar)
    .setDescription(msg.content)

  const sentEmbed = await subChannel.send(embed)
  sentEmbed.react('👍')
  sentEmbed.react('👎')
}

export default suggestion