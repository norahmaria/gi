import Reaction from '../types/Reaction'
import languages from '../constants/languages/languages'

const setReactionLanguageRoles = async ({ reaction, user, remove }: Reaction) => {
  const { message, emoji, partial } = reaction

  if (user.bot || !message.guild) return
  if (message.partial) await reaction.message.fetch()
  if (partial) await reaction.fetch()

  const userID = message.guild?.members.cache.get(user.id)
  if (!userID) return

  for (let i = 0; i < languages.length; i++) {
    if (emoji.name === languages[i].name) {
      if (remove) return userID.roles.remove(languages[i].roleID)
      return userID.roles.add(languages[i].roleID)
    }
  }
}

export default setReactionLanguageRoles