import Discord from 'discord.js'
import guildMemberAdd from './guildMemberAdd'

import message from './message'
import messageDelete from './messageDelete'
import messageReactionAdd from './messageReactionAdd'
import messageReactionRemove from './messageReactionRemove'

const events = (client: Discord.Client) => {
  client.on('message', msg => message({ client, msg }))
  client.on('messageDelete', msg => messageDelete({ client, msg }))
  client.on('messageReactionAdd', (reaction, user) => messageReactionAdd({ client, reaction, user }))
  client.on('messageReactionRemove', (reaction, user) => messageReactionRemove({ client, reaction, user }))
  client.on('guildMemberAdd', member => guildMemberAdd(member))
}

export default events