/**
 * This entry point is for Firebas Functions.
 */

import * as functions from 'firebase-functions'
import { routes } from './src/routing'
import * as express from 'express'
import * as FirebaseAdmin from 'firebase-admin'
import * as bodyParser from 'body-parser'

const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: { distDir: 'next' } })
const handle = routes.getRequestHandler(app)

export const nextApp = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl)
  return app.prepare().then(() => handle(req, res))
})

const exapp = express()

exapp.use(
  bodyParser.urlencoded({
    extended: true
  })
)

exapp.use(bodyParser.json())

exapp.post('/signup', (req, res) => {
  const ap = FirebaseAdmin.initializeApp()
  ap.auth()
    .createUser({
      email: req.body.email,
      password: req.body.password
    })
    .then(() => res.send('success'))
    .catch(e => res.send(e.message))
})

export const api = functions.https.onRequest(exapp)
