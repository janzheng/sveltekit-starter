

// import fastify from 'fastify'

const fastify = require('fastify')
const app = fastify()


app.get('/', function (request, reply) {
    reply.send("ridic?")
})


// app.listen(3002, (err, address) => {
//   if (err) {
//     app.log.error(err)
//     process.exit(1)
//   }
//   app.log.info(`server listening on ${address}`)
// })



module.exports = app

