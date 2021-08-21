import Discord from 'discord.js'

import { blue } from '../constants/colors'

// const questions = [
//   "Have you done your own research before asking?",
//   "Have you stated what you hope to achieve and the actual results?",
//   "Have you explained what you've already tried?",
//   "If your question includes code, have you checked that it's properly formatted?",
//   "If your question *doesn't* include code, are you sure it shouldn't?",
//   "Have you included relevant errors?",
//   "Have you read through your own question carefully twice?"
// ].map(q => `:blue_square: ${q}`).join('\n\n')

const questionChecklistEmbed = () => {
  const attachment = new Discord.MessageAttachment(`./src/assets/gi-mechanic-blue.png`, 'gicon.png')

  return new Discord.MessageEmbed()
    .setColor(blue)
    .setTitle('Asking a Question Checklist')
    .attachFiles([attachment])
    .setThumbnail('attachment://gicon.png')
    .setDescription(`
      To get the most help of asking a question - make sure to ask the question well. When asking for help, pretend you're trying to explain the issue to a busy colleague - it should be informative but brief. **Here are some things to consider when asking for help**: \n\n **Learn more** on how to ask good questions: \n [→ Writing The Perfect Question](https://codeblog.jonskeet.uk/2010/08/29/writing-the-perfect-question/) \n [→ Stack Overflow: How To Ask](https://stackoverflow.com/help/how-to-ask)
    `)
    .addFields({
      name: ':blue_square: Research', 
      value: 'Have you done your own research before asking?'
    }, {
      name: ':blue_square: Intention',
      value: 'State what you hope to achieve, and the results you get.'
    }, {
      name: ':blue_square: Attempts',
      value: `Have you attempted to fix it yourself, and have you explained what you've already tried?`
    }, {
      name: ':blue_square: Formatting',
      value: `If your question includes code, have you checked that it's properly formatted? And if your question *doesn't* include code, are you sure it shouldn't?`
    }, {
      name: ':blue_square: Errors',
      value: `If you're getting errors, have you included **relevant** errors?`
    }, {
      name: ':blue_square: Decency',
      value: 'Have you made sure to read your own question carefully twice to make sure it makes sense and has enough information for someone new coming in?'
    })
}

export default questionChecklistEmbed