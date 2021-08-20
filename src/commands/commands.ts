import Discord from 'discord.js'

import Message from '../types/Message'
import commandsEmbed from '../embeds/commands'
import guide from './guide'
import invite from './invite'

const commands = ({cmd, args, client, msg, channel}: Message) => {
  const subChannel = channel as Discord.TextChannel | Discord.NewsChannel

  switch (cmd) {
    case 'guide':
      guide({msg, args, client})
      break

    case 'invite':
      invite({args, client, msg, channel})
      break

    case 'commands':
      subChannel.send(commandsEmbed())
      break
    
    default:
      break
  }
}

export default commands