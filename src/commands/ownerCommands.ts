import Discord from 'discord.js'
import Message from '../types/Message'

import setUp from './setUp'

const ownerCommands = ({cmd, args, client, msg, channel}: Message) => {
  const subChannel = channel as Discord.TextChannel | Discord.NewsChannel

  switch (cmd) {
    case 'setup':
      setUp({cmd, args, client, msg})
      break
    
    case 'clear':
      if (channel) subChannel.bulkDelete(100)
      break
    
    default:
      break
  }
}

export default ownerCommands