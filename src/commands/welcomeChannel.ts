import Discord from 'discord.js'

import Message from '../types/Message'
import { yellow } from '../constants/colors'

const welcomeChannel = async ({ cmd, msg, channel }: Message) => {
  if (!msg || msg?.author?.bot || !msg.author) return
  const subChannel = channel as Discord.TextChannel | Discord.NewsChannel

  const user = msg.author.username
  const avatar = msg.author.avatarURL()
  if (!avatar || avatar === undefined) return

  msg.delete()

  if(msg.content?.startsWith('!')) {
    if (cmd === 'intro') {
      const attachment = new Discord.MessageAttachment(`./src/assets/gi-yellow.png`, 'gicon.png')

      const introductionEmbed = new Discord.MessageEmbed()
        .setColor(yellow)
        .attachFiles([attachment])
        .setThumbnail('attachment://gicon.png')
        .setTitle('Introduce yourself 💛')
        .setDescription(`Introduce yourself, you can phrase it yourself or use this template! \n\n **Name**: *Your name here* \n **Pronouns**: *Prefered pronouns here* \n **Experience**: *Tell us a lil about your experience* \n **Interests**: *What interests you outside coding? \n **Age**: *Some age*`)

      subChannel.send(introductionEmbed)
    }

    return
  }

  const embed = new Discord.MessageEmbed()
    .setColor(yellow)
    .setAuthor(`Welcome ${user}  💛`, avatar)
    .setDescription(msg.content)

  subChannel.send(embed)
}

export default welcomeChannel