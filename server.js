const fastify = require('fastify')()
const serveStatic = require('serve-static')
const path = require('path')

const opts = {
  index: 2,
  schema: {
    querystring: {
      name: { type: 'number' },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          rank: { type: 'number' },
          score: { type: 'number' }
        }
      }
    }
  }
}

fastify.get('/student', opts, function (request, reply) {
  reply.send({ id: 1 })
})
fastify.get('/score', opts, function (request, reply) {
  reply.send({ score: 100 })
})
fastify.get('/rank', opts, function (request, reply) {
  reply.send({ rank: 1 })
})
// fastify.register(require('./route'))
fastify.use('/', serveStatic(path.resolve(__dirname, 'public')))
fastify.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})