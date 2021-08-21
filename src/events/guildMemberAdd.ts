import Discord from 'discord.js'

const WELCOME_CHANNEL = '877951877852037180'

const guildMemberAdd = async (member: Discord.GuildMember) => {
  console.log(member)
  const channel = member.guild.channels.cache.find(channel => channel.id == WELCOME_CHANNEL)
  // const channel = member.guild.channels.cache.get(WELCOME_CHANNEL)

  if (!channel) return

  // Using a type guard to narrow down the correct type
  if (!((channel): channel is Discord.TextChannel => channel.type === 'text')(channel)) return

  channel.send(`Hello there! You joined the server.`);
}

export default guildMemberAdd