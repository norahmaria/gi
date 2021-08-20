import { yellow, lightBlue, blue, pink, red, green } from '../colors'

import youtubeChannels from './youtubeChannels'
import otherResources from './otherResources'

const html = {
  name: 'html',
  desc: 'HTML',
  roleID: '877566541393195052',
  emoji: '<:html:877566066715422790>',
  color: red,
  textColor: 'red',
  code: 'html',
  helpChannels: ['html-orange', 'html-yellow'],
  channels: youtubeChannels.filter(({languages}) => languages.includes('html')),
  resources: otherResources.filter(({languages}) => languages.includes('html'))
}

const sass = {
  name: 'sass',
  desc: 'SASS/CSS',
  roleID: '877566503321501736',
  emoji: '<:sass:877566066769920060>',
  color: pink,
  textColor: 'pink',
  code: 'css',
  helpChannels: ['sass-pink', 'sass-red'],
  channels: youtubeChannels.filter(({languages}) => languages.includes('sass')),
  resources: otherResources.filter(({languages}) => languages.includes('sass'))
}

const javascript = {
  name: 'javascript',
  desc: 'JavaScript',
  roleID: '877561421347577907',
  emoji: '<:javascript:877518299305476117>',
  color: yellow,
  textColor: 'yellow',
  code: 'js',
  helpChannels: ['javascript-yellow', 'javascript-orange'],
  channels: youtubeChannels.filter(({languages}) => languages.includes('javascript')),
  resources: otherResources.filter(({languages}) => languages.includes('javascript'))
}

const react = {
  name: 'react',
  desc: 'React',
  roleID: '877561467749150740',
  emoji: '<:react:877518299573911572>',
  color: lightBlue,
  textColor: 'lightblue',
  code: 'jsx',
  helpChannels: ['react-blue', 'react-yellow'],
  channels: youtubeChannels.filter(({languages}) => languages.includes('react')),
  resources: otherResources.filter(({languages}) => languages.includes('react'))
}

const typescript = {
  name: 'typescript',
  desc: 'TypeScript',
  roleID: '877561557360459807',
  emoji: '<:typescript:877518299611664444>',
  color: blue,
  textColor: 'blue',
  code: 'ts',
  helpChannels: ['typescript-blue', 'typescript-purple'],
  channels: youtubeChannels.filter(({languages}) => languages.includes('typescript')),
  resources: otherResources.filter(({languages}) => languages.includes('typescript'))
}

const nodejs = {
  name: 'nodejs',
  desc: 'NodeJS',
  roleID: '877563340774318090',
  emoji: '<:nodejs:877518299267751966>',
  color: green,
  textColor: 'green',
  code: 'js',
  helpChannels: ['nodejs-green', 'nodejs-turquoise'],
  channels: youtubeChannels.filter(({languages}) => languages.includes('nodejs')),
  resources: otherResources.filter(({languages}) => languages.includes('nodejs'))
}

const graphql = {
  name: 'graphql',
  desc: 'GraphQL',
  roleID: '877566467682492427',
  emoji: '<:graphql:877566066514075668>',
  color: pink,
  textColor: 'pink',
  code: 'js',
  helpChannels: ['graphql-pink', 'graphql-red'],
  channels: youtubeChannels.filter(({languages}) => languages.includes('graphql')),
  resources: otherResources.filter(({languages}) => languages.includes('graphql'))
}

export const helpChannels = javascript.helpChannels.concat(
  react.helpChannels, 
  typescript.helpChannels, 
  nodejs.helpChannels, 
  sass.helpChannels, 
  graphql.helpChannels, 
  html.helpChannels 
)

export default [html, sass, javascript, react, typescript, nodejs, graphql]