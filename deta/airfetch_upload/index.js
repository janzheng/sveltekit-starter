

import Cytosis from 'cytosis'
import { Deta } from 'deta'
import { config } from "dotenv"
import { fileTypeFromBuffer } from 'file-type'

import { addRecord } from './node_modules/plasmid/utils/airfetch.js'

config(); // https://github.com/sveltejs/sapper/issues/122

// add your Project Key
export const _deta = Deta(process.env['DETA_KEY']);
export const drive = _deta.Drive("uploads");

const apiEditorKey = process.env.AIRTABLE_PRIVATE_API
const baseId = process.env.AIRTABLE_PRIVATE_BASE





import fastify from 'fastify'
import cors from 'fastify-cors'
import multipart from 'fastify-multipart'
import urldata from 'fastify-url-data'

const app = fastify({logger: true})

app.register(cors, { 
  // put your options here
  origin: ['*', 'http://localhost:3000'],
  methods: ['*'],
  credentials: true,
  // allowedHeaders: 'Accept, X-Requested-With, Content-type'
  allowedHeaders: '*'
})


app.register(urldata)
app.register(multipart)


app.post('/', async function(req, reply) {

  const urlData = req.urlData()

  let data = await req.file() // single file only
  let file = await data.toBuffer()
  // const buffer = await file.arrayBuffer();
  const uintarr = new Uint8Array(file)

  if (file) {
    console.log('file::', urlData.host)
    // let record = await handleFile(file, req.raw.url, 'Test')

    // upload file
    let fileref = await drive.put(data.filename, {
      data: uintarr,
    })

    const tableName = 'Test'
    const fieldName = 'Attachments'

    const record = await Cytosis.save({
    apiKey: apiEditorKey,
    baseId: baseId,
    tableName: tableName,
    recordId,
    tableOptions,
    payload
  })




    reply.send({record})
  }
  reply.send('no file')

})














// get a file name with /?file=filename.jpg
app.get('/', async function(request, reply) {
  console.log('query: ', request.query)
  if(request.query && request.query.name) {
    let name = 
    reply.send(request.query.name)
  }
  reply.send('hey')
})




// Run the server! — local testing
app.listen(3001, (err, address) => {
  if (err) {
    console.log('error:', err)
    app.log.error(err)
    process.exit(1)
  }
  app.log.info(`server listening on ${address}`)
})



// module.exports = app

