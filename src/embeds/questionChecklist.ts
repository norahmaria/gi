import Discord from 'discord.js'

import { blue } from '../constants/colors'

const questionChecklistEmbed = () => {
  const attachment = new Discord.MessageAttachment(`./src/assets/gi-mechanic-blue.png`, 'gicon.png')
  const emoji = '<:typescript:877518299611664444>'

  return new Discord.MessageEmbed()
    .setColor(blue)
    .setTitle('Asking a Question Checklist')
    .attachFiles([attachment])
    .setThumbnail('attachment://gicon.png')
    .setDescription(`
      To get the most help of asking a question - make sure to ask the question well. When asking for help, pretend you're trying to explain the issue to a busy colleague - it should be informative but brief. **Here are some things to consider when asking for help**:
    `)
    .addFields({
      name: `${emoji} Research & Attempts`, 
      value: "Have you done your own research before asking, and have you tried your best to fix the issue with the research you've done? Great! Then explain what you've already tried.",
    }, {
      name: `${emoji} Intention`,
      value: "Have you stated what you hope to achieve and why, and what results you're getting instead?",
    }, {
      name: `${emoji} Formatting`,
      value: "Your question should be formatted so that it's readable for others, and make sure to check for spelling and grammar errors the best you can. If your question includes code, have you checked that it's properly formatted? And if your question *doesn't* include code, are you sure it shouldn't?",
    }, {
      name: `${emoji} Errors`,
      value: "If you're getting errors, have you included **relevant** errors? If there are no errors but you think you might now what the issue could be related to, let the people know what your thoughts are.",
    }, {
      name: `${emoji} Double Check Your Question`,
      value: "Have you made sure to read your own question carefully twice to make sure it makes sense and has enough information for someone new coming in?",
    })
    // .setFooter(`**Learn more** on how to ask good questions: \n [→ Writing The Perfect Question](https://codeblog.jonskeet.uk/2010/08/29/writing-the-perfect-question/) \n [→ Stack Overflow: How To Ask](https://stackoverflow.com/help/how-to-ask)`)
}

export default questionChecklistEmbed