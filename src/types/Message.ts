import Discord from 'discord.js'

type Message = {
  msg: Discord.Message | Discord.PartialMessage,
  args: String[], 
  client: Discord.Client, 
  cmd?: String,
  channel?: Discord.TextChannel | Discord.DMChannel | Discord.NewsChannel
}

export default Message