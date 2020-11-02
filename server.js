const express = require('express')
const path = require('path')
const dev = process.env.NODE_ENV !== 'production'
const next = require('next')
const app = next({ dev })
const handle = app.getRequestHandler()
const { parse } = require('url')
const pathMatch = require('path-match')

const server = express()
const route = pathMatch()
server.use('/_next', express.static(path.join(__dirname, '.next'), { maxAge: "1d" })) // cache static assets for 1 day
server.get('/time', (req, res) => app.render(req, res, '/time'))
server.get('/swapi/:id', (req, res) => {
    const params = route('/swapi/:id')(parse(req.url).pathname)
    return app.render(req, res, `/swapi/${req.params.id}`, params)
})
server.get('*', (req, res) => {
    res.setHeader("Cache-Control", "public, max-age=86400") // Cache dynamic pages for a day - you can verify that
    handle(req, res)                                        // these headers are set using Chrome dev tools 'Network' tab
})

module.exports = server
