import Discord from 'discord.js'

import { yellow } from '../constants/colors'
import languages from '../constants/languages/languages'

const languagesHalfCount = Math.ceil(languages.length / 2)
const languagesFirstHalf = languages.slice(0, languagesHalfCount).map(lang => `${lang.emoji} or **${lang.name}**`).join(' ā ')
const languagesSecondHalf = languages.slice(-languagesHalfCount).map(lang => `${lang.emoji} or **${lang.name}**`).join(' ā ')

const languageGuides = `${languagesFirstHalf} \n\n ${languagesSecondHalf}`

const commandsEmbed = () => {
  return new Discord.MessageEmbed()
    .setColor(yellow)
    .setTitle('Gi <:gi:877885515905511454> Commands')
    .setDescription(`
      Gi is a fairly minimal bot, but ever growing. You can see the code for Gi on [github](https://github.com/NorahSketch/gi), and suggestions are always welcome in <#877885425140760609>. You can always see this embed again with the command **!commands.**`)
    .addFields({
      name: '!project',
      value: `\n Sending !project will give you a list of project ideas, while sending !project followed by one of those project commands will send you a list of ideas for what you can include in the project.`
    }, {
      name: '!ask',
      value: `!ask will send you some tips on asking a good question.`
    }, {
      name: '!invite',
      value: `!invite will send you an invite link that 5 people can use over 10 minutes.`
    }, {
      name: '!guide language', 
      value: `!guide followed by a language will send some learning resources for the language, if no language is specified Gi will send all guides. \n\n ${languageGuides} \nā`
    })
}

export default commandsEmbed