
const Cytosis = require('cytosis')

const { Deta } = require('deta')
const { config } = require("dotenv")
    const { Readable } = require('stream');


config(); // https://github.com/sveltejs/sapper/issues/122

// add your Project Key
const _deta = Deta(process.env['DETA_KEY']);
const drive = _deta.Drive("uploads");


const apiEditorKey = process.env.AIRTABLE_PRIVATE_API
const baseId = process.env.AIRTABLE_PRIVATE_BASE

var mime = require('mime-types')


const fastify = require('fastify')
const cors = require('fastify-cors')
const multipart = require('fastify-multipart')
const urldata = require('fastify-url-data')


const app = fastify({logger: true})
app.register(multipart)
app.register(urldata)
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



app.get("/download/:name", async (req, res) => {
    const name = req.params.name;
    const img = await drive.get(name);
    const buffer = await img.arrayBuffer();
    res.send(Buffer.from(buffer));
}); 



app.get('/file/:filename', async function (request, reply) {
  let filename = request.params.filename

  const file = await drive.get(filename)
  console.log('?!?!?!', file, file.type)


  if(file) {
    const fileArrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(fileArrayBuffer)

    // const magic = await WASMagic.create()
    // const type = magic.getMime(buffer)
    // const type
    let type = mime.lookup(filename)

    console.log('ok returning:.... ', type)


    // reply.headers({
    //   'Content-Type': type, // uncommenting headers makes Chrome show it
    //   // 'Content-disposition': `attachment; filename="${filename}"`, // downloads
    //   'Content-Disposition': `inline; filename=${filename}`, // shows in browser
    // })

    // const stream = Readable.from(buffer.toString());

    // const stream = new Readable({
    //   read () {
    //     this.push(buffer)
    //     this.push(null)
    //   }
    // })

    // const cstream = file.stream()
    // reply.send(stream) 
    reply.type(type)
    reply.send(buffer)
  } 

  reply.send('no file ...')
})









app.post('/', async function(request, reply) {
  const urlData = request.urlData()
  const data = await request.file()
  const file = await data.toBuffer()
  const uintarr = new Uint8Array(file)

  // upload file
  let fileref = await drive.put(data.filename, {
    data: uintarr,
  })

  const tableName = 'Test'
  const fieldName = 'Attachments'
  
  console.log('file:', file)

  const _cytosis = Cytosis.default
  const cytosis = await _cytosis.save({
    apiKey: apiEditorKey,
    baseId: baseId,
    tableName: tableName,
    tableOptions: { insertOptions: ['typecast'], },
    payload: { [fieldName]: [{ url: `https://${urlData.host}/file/${fileref}` }], }
  })

  console.log(`---- ${urlData.host}/file/${fileref}`, )

  reply.send({file: `https://${urlData.host}/file/${fileref}`, record: JSON.stringify(cytosis)})
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

