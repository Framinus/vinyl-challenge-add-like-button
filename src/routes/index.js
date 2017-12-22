import express from 'express'

import albums from './albums'
import users from './users'
import authentication from './authentication'
import api from './api'

const routes = express.Router()

routes.get('/', (req, res) => res.redirect('/albums'))
routes.use('/', authentication)
routes.use('/users', users)
routes.use('/albums', albums)
routes.use('/api', api)


// TODO: write the route that handles getLikes
export default routes
