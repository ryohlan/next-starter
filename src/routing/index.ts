const NextRoutes = require('next-routes')

export const routes = NextRoutes()
  .add('second')
  .add('user', '/users/:id', 'users/show')

export const Link = routes.Link

export const Router = routes.Router
