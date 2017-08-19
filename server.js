const express = require('express')
const next = require('next')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/blog/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/api/posts', (req, res) => {
      res.send(JSON.parse(fs.readFileSync('./posts.json', 'utf8')))
    })

    server.get('/api/posts/:id', (req, res) => {
      console.log(req.params.id)
      const posts = JSON.parse(fs.readFileSync('./posts.json', 'utf8'))
      res.send(posts[req.params.id])
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    const port = process.env.PORT || 3000

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on ${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
