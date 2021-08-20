import Discord from 'discord.js'
import { green } from '../constants/colors'

const newProgrammersResources = [{
  title: 'Getting Started (r/learnprogramming)',
  url: 'https://www.reddit.com/r/learnprogramming/wiki/faq#wiki_getting_started'
}, {
  title: `I want to learn programming but I Don't Know Where to Start`,
  url: 'https://codeburst.io/i-want-to-learn-programming-but-i-dont-know-where-to-start-80dd2d55e1fd'
}, {
  title: 'How to learn programming?',
  url: 'https://hackr.io/blog/how-to-learn-programming'
}, {
  title: '21 days',
  url: 'http://norvig.com/21-days.html'
}]

const newProgrammers = () => {  
  return new Discord.MessageEmbed()
    .setColor(green)
    .setTitle(`🌱 For new programmers`)
    .setDescription(`
      ${newProgrammersResources.map(({title, url}) => `↳ [${title}](${url})`).join('\n')}
    `)
}

export default newProgrammers