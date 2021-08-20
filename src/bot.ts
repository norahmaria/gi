import Discord from 'discord.js'
import dotenv from 'dotenv'

import events from './events/events'

dotenv.config({ path: './src/utils/.env' })

const buildGI = async (bot: string) => {
  const client: Discord.Client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
  })

  await client.login(bot)

  client.on('ready', () => {
    if (client.user) {
      console.log(`Launched ${client.user.username}`)  
      client.user.setActivity(`over y'all`, { type: 'WATCHING'})  
    }
    events(client)
  })
}

buildGI(`${process.env.BOT}`)