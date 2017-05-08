/**
 * Created by pradip on 7/5/17.
 */
const express = require('express')
const next = require('next')
// const Contentstack = require('contentstack')

const dev = process.env.NODE_ENV || 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
// const _env = require('./config/index');

app.prepare()
    .then(() => {
        const server = express()

       /* server.get('/p/:id', (req, res) => {
            const actualPage = '/post'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })*/

        server.get('*', (req, res) => {
            return handle(req, res)
        })
        var port_number = server.listen(process.env.PORT || 4000);
        server.listen(port_number, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:4000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })