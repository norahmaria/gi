import Discord from 'discord.js'

type Channels = {
  faq: Discord.TextChannel,
  roles: Discord.TextChannel,
  help: [Discord.TextChannel]
}

export default Channels