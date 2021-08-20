import Discord from 'discord.js'
import Params from '../types/Params'

import { languageRolesEmbedId } from '../embeds/languageRoles'
import setReactionLanguageRoles from '../utils/setReactionLanguageRoles'

const messageReactionRemove = async ({client, reaction, user}: Params) => {
  if (!reaction || !user) return
  const { message } = reaction
  
  if (message.id === languageRolesEmbedId) 
    setReactionLanguageRoles({reaction, user, remove: true})
}

export default messageReactionRemove
