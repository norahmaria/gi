import Discord from 'discord.js'

import Message from '../types/Message'
import Resource from '../types/Resource'
import languages from '../constants/languages/languages'
import getLanguageIconsFromStringArray from '../utils/getLanguageIconsFromStringArray'

const guide = async ({ msg, args }: Message) => {  
  for (let i = 0; i < languages.length; i++) {
    if (languages[i].name === args[0] || languages[i].emoji === args[0]) {

      const { color, textColor, emoji, desc, channels, resources } = languages[i]
      const attachment = new Discord.MessageAttachment(`./src/assets/gi-${textColor}.png`, 'gicon.png')
  
      const guideEmbed = new Discord.MessageEmbed()
        .setColor(color)
        .attachFiles([attachment])
        .setThumbnail('attachment://gicon.png')
        .setTitle(`${emoji} Learning resources for ${desc}`)
        .setDescription(`
          ${getSummary(channels, true)} \n
          **Other Resources:** \n ${getSummary(resources)} \n\n
        `)

      await msg.channel.send(guideEmbed)
    }
  }
}

function getSummary (array: Resource[], doubleSpace?: boolean) {
  return array.map(({ languages, title, url, desc}: Resource) => {
    const icons = getLanguageIconsFromStringArray(languages).join(' ')
    const link = `**[${title}](${url})**`

    return `${link} ${icons} ${desc ? `\n ${desc}` : ''}`
  }).join(`${doubleSpace ? '\n\n' : '\n'}`)
}

export default guide