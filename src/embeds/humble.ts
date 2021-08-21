import Discord from 'discord.js'

const humbleEmbed = () => {
  const attachment = new Discord.MessageAttachment(`./src/assets/humble.gif`, 'humble.gif')

  return new Discord.MessageEmbed()
    .setColor('#A4988A')
    .attachFiles([attachment])
    .setImage('attachment://humble.gif')
    .setTitle('We wanted to remind you to **be humble**')
    .setDescription(`
      It might have been your tone or the words you used, but you made someone feel maybe a *lil* dumb. \n\n We're all here to **learn**, and some people have more knowledge than others, but if you're offering to help - it's not the time to show off your skills, it's the time to *share* your skills. \n\n If you're acting this way because you think someone is in over their head and you **want** to help them further - feel free ask more questions to figure out exactly what the person is struggling to understand and try your best to help. \n\n **If you don't have the energy to help further**, that's okay too, just tell them you can't help after all.
    `)
}

export default humbleEmbed