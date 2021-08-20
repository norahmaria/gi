import Discord from 'discord.js'
import Channels from './Channels'

type Params = {
  client: Discord.Client,
  msg?: Discord.Message | Discord.PartialMessage,
  reaction?: Discord.MessageReaction, 
  user?: Discord.User | Discord.PartialUser,
  channels?: Channels
}

export default Params