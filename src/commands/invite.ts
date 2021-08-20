import Discord from 'discord.js'
import Message from '../types/Message'

const invite = async ({ msg, channel }: Message) => {
  const subChannel = channel as Discord.TextChannel | Discord.NewsChannel
  const invite = await subChannel.createInvite({maxAge: 604800, maxUses: 5})

  msg.reply(invite ? `5 invites for 10 minutes: ${invite}` : '<:gi:877885515905511454> Woops, I failed at getting an invite, sorry');
}

export default invite