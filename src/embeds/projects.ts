import Discord from 'discord.js'

import { blue } from '../constants/colors'
import { frontend, backend, fullstack } from '../constants/projects'
const backticks = '```'

const getProjectCommands = (array: any) => {
  const commands = array.map((project: any) => `${project.command}`).join('\n')
  return `${backticks}\n${commands} ${backticks}`
}

const projectEmbed = () => {
  const attachment = new Discord.MessageAttachment(`./src/assets/gi-mechanic-blue.png`, 'gicon.png')
  const emoji = ':blue_square:'

  return new Discord.MessageEmbed()
    .setColor(blue)
    .setTitle('Project Ideas')
    .attachFiles([attachment])
    .setThumbnail('attachment://gicon.png')
    .setDescription(`
      Sometimes it can be hard to think of projects to keep practising and challenging yourself, so here's a list of some projects you could do. \n\n To see further details and **suggestions for features** for the different projects, write **!project** followed by the **keyword** below. \n‎‎
    `)
    .addField('Front end', getProjectCommands(frontend), true)
    .addField('Back end', getProjectCommands(backend), true)
    .addField('Fullstack', getProjectCommands(fullstack), true)
}

export default projectEmbed