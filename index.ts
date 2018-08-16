/**
 * This entry point is for Firebas Functions.
 */

import * as functions from 'firebase-functions'
import { routes } from './src/routing'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as firebaseAdmin from 'firebase-admin'

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

exapp.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://next-starter.firebaseapp.com')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

const admin = firebaseAdmin.initializeApp()

exapp.post('/sessionLogin', (req, res) => {
  const idToken = req.body.idToken
  const expiresIn = 60 * 60 * 24 * 5 * 1000
  admin
    .auth()
    .createSessionCookie(idToken, { expiresIn })
    .then(sessionCookie => {
      const options = {
        maxAge: expiresIn,
        httpOnly: true,
        secure: true
      }
      res.cookie('session', sessionCookie, options).end()
    })
    .catch(() => {
      res
        .status(401)
        .send('UNAUTHORIZED REQUEST!')
        .end()
    })
})

exapp.post('login', (req, res) => {
  const sessionCookie = req.cookies.session || ''
  admin
    .auth()
    .verifySessionCookie(sessionCookie, true)
    .then(decodedClaims => {
      admin
        .auth()
        .getUser(decodedClaims.uid)
        .then(user => res.send({ user }).end())
    })
    .catch(error => {
      res.status(401).send({ error: 'PLEASE LOGIN OR SIGNUP', message: error.message })
    })
})

export const api = functions.https.onRequest(exapp)
