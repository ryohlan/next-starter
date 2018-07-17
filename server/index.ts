import { createServer, IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import * as next from 'next'

const port = (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req: IncomingMessage, res: ServerResponse) => {
    const parsedUrl = parse(req.url || '', true)
    handle(req, res, parsedUrl)
  }).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
