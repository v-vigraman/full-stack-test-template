const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware([
    '/comments'
  ],
  { target: 'http://localhost:3001' }
  )
  )
}
