/*
  API:

  routes.add(name, pattern = /name, page = name)
  routes.add(pattern, page)
  routes.add(object)
  Arguments:

  name - Route name
  pattern - Route pattern (like express, see path-to-regexp)
  page - Page inside ./pages to be rendered
*/

const routes = module.exports = require('next-routes')()

routes
.add('counter')
.add('create-account')
.add('dashboard')
.add('post')
