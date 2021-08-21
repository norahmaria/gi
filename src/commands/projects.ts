import Discord from 'discord.js'
import Message from '../types/Message'

import projectEmbed from '../embeds/projects'
import { allProjects } from '../constants/projects'
import { blue } from '../constants/colors'

const projects = async ({ client, cmd, args, msg, channel }: Message) => {
  const subChannel = channel as Discord.TextChannel | Discord.NewsChannel
  if (!args[0]) return await subChannel.send(projectEmbed())

  const { name, summary, features } = allProjects.filter(project => project.command === args[0])[0]
  const attachment = new Discord.MessageAttachment(`./src/assets/gi-mechanic-blue.png`, 'gicon.png')

  const featureFields = features.map(({title, desc, extras}) => {
    const name = `🔵  ${title.toUpperCase()}`
    const formattedExtras = extras.map(extra => `➸ ${extra}`).join('\n')
    const value = `${desc} \n\n *Further you could:* \n ${formattedExtras} \n‎`
    
    return { name, value }
  })

  const embed = new Discord.MessageEmbed()
    .setColor(blue)
    .setTitle(name)
    .attachFiles([attachment])
    .setThumbnail('attachment://gicon.png')
    .setDescription(`${summary} \n ${features.length ? '**Try adding some of these features:** \n' : ''}‎`)
    .addFields(featureFields)
    .addField('Sending you good luck from <:gi:877885515905511454> Gi', '*Type !project to see lists of all project ideas*')

  return await subChannel.send(embed)
}

export default projects