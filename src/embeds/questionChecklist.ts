import Discord from 'discord.js'

import { blue } from '../constants/colors'

const questions = [
  "Have you done your own research before asking?",
  "Have you stated what you hope to achieve and the actual results?",
  "Have you explained what you've already tried?",
  "If your question includes code, have you checked that it's properly formatted?",
  "If your question *doesn't* include code, are you sure it shouldn't?",
  "Have you included relevant errors?",
  "Have you read through your own question carefully twice?"
].map(q => `🔹 ${q}`).join('\n\n')

const questionChecklistEmbed = () => {
  return new Discord.MessageEmbed()
    .setColor(blue)
    .setTitle('👩‍🔧 Asking a Question Checklist')
    .setDescription(`
      To get the most help of asking a question - make sure to ask the question well. When asking for help, pretend you're trying to explain the issue to a busy colleague - it should be informative but brief. **Here are some things to consider when asking for help**: \n\n ${questions} \n\n **Learn more** on how to ask good questions: \n [→ Writing The Perfect Question](https://codeblog.jonskeet.uk/2010/08/29/writing-the-perfect-question/) \n [→ Stack Overflow: How To Ask](https://stackoverflow.com/help/how-to-ask)
    `)
}

export default questionChecklistEmbed