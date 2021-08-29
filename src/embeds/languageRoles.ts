import Discord from 'discord.js'

import { yellow } from '../constants/colors'
import languages from '../constants/languages/languages'

export const languageRolesEmbedId = '881399146597187605'
const langDescriptions = languages.map(lang => `${lang.emoji} for **${lang.desc}**`).join('\n\n')

const languageRolesEmbed = () => {
  return new Discord.MessageEmbed()
    .setColor(yellow)
    .setTitle('Pick your technologies')
    .setDescription(`Please **react :react:** with the languages you've learnt or are currently trying to learn, this will give you access to the different help channels. \n\n ${langDescriptions}`)
}

export default languageRolesEmbed