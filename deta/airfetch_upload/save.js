


import { Deta } from 'deta'
import { config } from "dotenv"
import { fileTypeFromBuffer } from 'file-type'

config(); // https://github.com/sveltejs/sapper/issues/122

// add your Project Key
export const _deta = Deta(process.env['DETA_KEY']);
export const drive = _deta.Drive("uploads");






import fastify from 'fastify'
import cors from 'fastify-cors'
import formbody from 'fastify-cors'


const app = fastify({logger: true})

app.register(cors, { 
  // put your options here
  origin: ['*', 'http://localhost:3000'],
  methods: ['*'],
  credentials: true,
  // allowedHeaders: 'Accept, X-Requested-With, Content-type'
  allowedHeaders: '*'
})
// app.register(formbody)


app.get('/', function (request, reply) {
    reply.send("test")
})

app.get('/file/:filename', async function (request, reply) {
  let filename = request.params.filename

  const file = await drive.get(filename)
  if(file) {
    const fileArrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(fileArrayBuffer)
    const type = await fileTypeFromBuffer(buffer)

    reply.headers({
      'Content-Type': type.mime, // uncommenting headers makes Chrome show it
      // 'Content-Disposition': `attachment; filename="${file.name}"`, // downloads
      'Content-Disposition': `inline`, // shows in browser
    })
    reply.send(buffer) 
  } 

  reply.send('no file ...')
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
app.listen(3001, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  app.log.info(`server listening on ${address}`)
})



// module.exports = app

