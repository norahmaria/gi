import Discord from 'discord.js'

import { yellow } from '../constants/colors'
import languages from '../constants/languages/languages'

const languagesHalfCount = Math.ceil(languages.length / 2)
const languagesFirstHalf = languages.slice(0, languagesHalfCount).map(lang => `${lang.emoji} or **${lang.name}**`).join(' ┊ ')
const languagesSecondHalf = languages.slice(-languagesHalfCount).map(lang => `${lang.emoji} or **${lang.name}**`).join(' ┊ ')

const languageGuides = `${languagesFirstHalf} \n\n ${languagesSecondHalf}`

const commandsEmbed = () => {
  return new Discord.MessageEmbed()
    .setColor(yellow)
    .setTitle('Gi <:gi:877885515905511454> Commands')
    .setDescription(`
      Gi is a bot made by <@244046961907466260>, and is fairly basic but ever growing. You can see the code for Gi on [github](https://github.com/NorahSketch/gi), and suggestions are always welcome.`)
    .addFields(
      {name: '!guide language', value: `!guide followed by a language will send some learning resources for the language. \n\n ${languageGuides}`}
    )
}

export default commandsEmbed