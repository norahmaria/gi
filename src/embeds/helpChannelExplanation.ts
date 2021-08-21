import Discord from 'discord.js'

import { red } from '../constants/colors'

const helpChannelExplanationEmbed = () => {
  const attachment = new Discord.MessageAttachment(`./src/assets/gi-red.png`, 'gicon.png')

  return new Discord.MessageEmbed()
    .setColor(red)
    .setTitle('Asking a Question Checklist')
    .attachFiles([attachment])
    .setThumbnail('attachment://gicon.png')
    .setTitle('📮 How Help Channels Work')
    .setDescription(`
      Each help channel is reserved for one person at a time. **Ask your question in any of the appropriate <#877436250330628116> channels.**, then once you're done type **!open** to open the channel up again for the next person.
    `)
}

export default helpChannelExplanationEmbed