const types = {
  fullstack: 'Fullstack',
  frontend: 'Front end',
  backend: 'Back end'
}

const socialNetwork = {
  name: 'Social Network',
  command: 'social',
  type: types.fullstack,
  summary: 'Take inspiration from Twitter, Instagram, TikTok, Facebook etc. The great thing about this project is it can be as simple or complex as you want.',
  features: [{
    title: 'User system',
    desc: 'Let people sign up and sign in to their account.',
    extras: ['Allow users to have avatars', 'Add forgot password function', 'Add e-mail confirmation', 'Create a follower system', 'Add relationships']
  }, {
    title: 'Chat system',
    desc: 'Let the users have one-to-one chats with each other, or create group chats.',
    extras: ['Allow them to send photos or files', 'Add notifications', 'Show live online status']
  }, {
    title: 'Posts',
    desc: 'Let users create, edit and delete posts',
    extras: ['Let users upload photos or files', 'Let them add tags', 'Allow for people to mention users']
  }]
}

const eCommerce = {
  name: 'eCommerce',
  command: 'ecommerce',
  type: types.fullstack,
  summary: 'An eCommerce project is great for learning about security.',
  features: [{
    title: 'User system',
    desc: 'Let people sign up and sign in to their account.',
    extras: ['Allow users to have avatars', 'Add forgot password function', 'Add e-mail confirmation', 'Create a follower system']
  }, {
    title: 'User-generated Reviews',
    desc: 'Let the users leave their reviews for products or the site in general.',
    extras: ['Allow them to attach photos', 'Add general rating from the reviews on individual products']
  }]
}

const projectManagement = {
  name: 'Project Manager',
  command: 'projectmanagement',
  type: types.fullstack,
  summary: 'Take inspiration from Trello, Notion, Asana, ClickUp, Todoist.',
  features: [{
    title: 'User system',
    desc: 'Let people sign up and sign in to their account.',
    extras: ['Allow users to have avatars', 'Add forgot password function', 'Add e-mail confirmation']
  }, {
    title: 'Calendar',
    desc: 'Let user pick dates and see all relevant events/tasks etc.',
    extras: ['All for reccuring events', 'Allow to filter by tags']
  }, {
    title: 'Reminders',
    desc: 'Let users get notifications on tasks/events etc.',
    extras: ['Allow to set reminder without adding task/event']
  }]
}

const portfolio = {
  name: 'Portfolio',
  command: 'portfolio',
  type: types.frontend,
  summary: 'Create your own intriguing portfolio.',
  features: []
}

const api = {
  name: 'API',
  command: 'api',
  type: types.backend,
  summary: 'Create a restful api for others to use. Have a game you love? Make an api for it. Creating an API allows for alot of creativity.',
  features: [{
    title: 'Pagination',
    desc: 'Let the client side fetch content page by page',
    extras: ['Allow for filtered pagination']
  }, {
    title: 'Search',
    desc: 'Let the client use a search feature, live or static.',
    extras: ['Allow to search by similar, not just by equal']
  }]
}

export const allProjects = [socialNetwork, eCommerce, projectManagement, portfolio, api]

export const frontend = allProjects.filter(project => project.type === types.frontend)
export const backend = allProjects.filter(project => project.type === types.backend)
export const fullstack = allProjects.filter(project => project.type === types.fullstack)