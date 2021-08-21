import Discord from 'discord.js'

import Message from '../types/Message'
import commandsEmbed from '../embeds/commands'
import guide from './guide'
import invite from './invite'
import questionChecklistEmbed from '../embeds/questionChecklist'
import projects from './projects'
import humbleEmbed from '../embeds/humble'
import helpChannelExplanationEmbed from '../embeds/helpChannelExplanation'

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

    case 'ask':
      subChannel.send(questionChecklistEmbed())
      break

    case 'project':
      projects({args, client, msg, channel})
      break

    case 'humble':
      subChannel.send(humbleEmbed())
      break

    case 'help':
      subChannel.send(helpChannelExplanationEmbed())
    
    default:
      break
  }
}

export default commands