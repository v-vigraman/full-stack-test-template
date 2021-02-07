const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
var cors = require('cors')
const httpServer = http.createServer(app)
const request = require('request');

var corsOptions = {
    origin: 'http://localhost:3000/comments',
    optionsSuccessStatus: 200 
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.get("/comments", cors(corsOptions), (req, res) => {
    const COMMENTS_API_URL = "https://jsonplaceholder.typicode.com/comments"
    request(COMMENTS_API_URL, { json: true }, (err, resp, body) => {
        res.send(body)
    });
})

httpServer.listen(process.env.PORT || 3001)
