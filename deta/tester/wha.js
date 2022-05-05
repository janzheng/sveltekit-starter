

const fastify = require('fastify')
const app = fastify()

app.register(require('fastify-cors'), { 
  // put your options here
  origin: ['*', 'http://localhost:3000'],
  methods: ['*'],
  credentials: true,
  // allowedHeaders: 'Accept, X-Requested-With, Content-type'
  allowedHeaders: '*'
})


app.register(require('fastify-formidable'), {
  addContentTypeParser: true,
  // addHooks: true
})

app.register(require('fastify-formbody'))



app.get('/', function (request, reply) {
    reply.send("wtf!?")
})

app.post('/', async function(request, reply) {
  // you need to call the parser if you do not pass any option through plugin registration
  // await request.parseMultipart()

  // access files
  const files = request.files

  // access body
  // note that file fields will exist in body and it will becomes the file path saved on disk
  const body = request.body

  // // access all the files path
  // // request[kFileSavedPaths]

  // // check if it is multipart
  // // if( request[kIsMultipart] === true ) {}

  // // check if it is already parsed
  // // if ( request[kIsMultipartParsed] === true ) {}

  console.log('files/body ::: ', files, body)
  reply.send({files, body})
})










// Run the server! — local testing
// app.listen(3000, (err, address) => {
//   if (err) {
//     app.log.error(err)
//     process.exit(1)
//   }
//   app.log.info(`server listening on ${address}`)
// })



module.exports = app

