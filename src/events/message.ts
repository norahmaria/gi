import Discord from 'discord.js'

import { PREFIX } from '../constants/commands'

import Params from '../types/Params'
import commands from '../commands/commands'
import ownerCommands from '../commands/ownerCommands'
import helpChannel from '../commands/helpChannel'
import suggestion from '../commands/suggestion'

const RESOURCE_SUGGESTIONS = '877892527972319276'
const BOT_SUGGESTIONS = '877885425140760609'

const message = async ({ client, msg }: Params) => {
  if (!msg || !msg.content) return

  const { content } = msg
  const { channel, isServerOwner, isSuggestionChannel, isHelpChannel, args, cmd } = getVariables(msg as Discord.Message)

  const thanks = ["thank you", "thanks"]
  if (thanks.includes(content.toLowerCase())) msg.react('❤️')
  if (isHelpChannel) helpChannel({channel, msg, cmd, args, client})

  if (isSuggestionChannel) suggestion({channel, msg, args, client})

  if (!cmd || !msg.content.startsWith(PREFIX)) return
  
  if (isServerOwner) ownerCommands({ client, msg, cmd, args, channel })
  commands({ client, msg, cmd, args, channel })
}

export function getVariables (msg: Discord.Message) {
  let { content, channel, author } = msg
  channel = channel as Discord.TextChannel | Discord.NewsChannel

  const isServerOwner = author ? author.id === process.env.SERVER_OWNER : false
  const isHelpChannel = channel.parent?.name.toLowerCase().includes('help')
  const isSuggestionChannel = channel.parent?.name.toLowerCase().includes('suggestions') 

  const args: String[] = content?.slice(PREFIX.length).split(/ +/)
  const cmd = args?.shift()?.toLowerCase()

  return { channel, isServerOwner, isSuggestionChannel, isHelpChannel, args, cmd }
}

export default message