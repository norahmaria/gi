import Message from '../types/Message'
import Channels from '../types/Channels'

import { AVAILABLE_HELP_CHANNEL_ID } from './helpChannel'

import getChannels from '../utils/getChannels'
import availableHelpChannel from '../embeds/availableHelpChannel'
import languages from '../constants/languages/languages'
import languageRolesEmbed from '../embeds/languageRoles'
import questionChecklistEmbed from '../embeds/questionChecklist'
import newProgrammers from '../embeds/newProgrammers'
import commandsEmbed from '../embeds/commands'
import helpChannelExplanationEmbed from '../embeds/helpChannelExplanation'

const setUp = async ({ client, cmd, args, msg }: Message) => {
  const channels = getChannels(client)
  
  if (args[0] === 'clear') await clear(channels)

  let languageRoles = await channels.roles.send(languageRolesEmbed())
  
  languages.forEach(lang => {
    languageRoles.react(lang.emoji)
  })

  await channels.faq.send(questionChecklistEmbed())
  await channels.faq.send(newProgrammers())
  await channels.faq.send(commandsEmbed())
  await channels.faq.send(helpChannelExplanationEmbed())
}

async function clear (channels: Channels) {
  await channels.roles.bulkDelete(100)
  await channels.faq.bulkDelete(100)
  
  for (let i = 0; i < channels.help.length; i++) {
    await channels.help[i].bulkDelete(100)
    channels.help[i].setParent(AVAILABLE_HELP_CHANNEL_ID)
    channels.help[i].send(availableHelpChannel())
  }
} 

export default setUp