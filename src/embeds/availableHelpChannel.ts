import Discord from 'discord.js'

import { blue } from '../constants/colors'
import languages from '../constants/languages/languages'

const langCodes = languages.map(lang => `${lang.emoji} ${lang.code}`).join(' ')
const backticks = '\`\`\`'

const availableHelpChannel = () => {
  return new Discord.MessageEmbed()
  .setColor(blue)
  .setTitle('📮 Available help channel')
  .setDescription(`
    Each help channel is reserved for one person at a time. **Ask your question here to reserve this channel.** 

    **To get the best possible help, explain your problem well:** Explain what you want to do and why, what happens instead, and what you think the issue is. Include any relevant error messages. \n\n Send relevant code using code blocks. \n Wrap your code in ${backticks}, with the proper **highlighting**: \n\n **${langCodes}** \n\n To learn more on how to ask a good question, the command !ask will tell you more. \n Once you're done type **!open** to open the channel again.
  `)
}

export default availableHelpChannel