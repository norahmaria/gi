import Discord from 'discord.js'

type Reaction = {
  reaction: Discord.MessageReaction,
  user: Discord.User | Discord.PartialUser,
  remove?: Boolean
}

export default Reaction