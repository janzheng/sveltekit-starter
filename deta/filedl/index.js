

// hello! 
// deta update -e .env

const Cytosis = require('cytosis')
const { Deta } = require('deta')
const mime = require('mime-types')

const { config } = require("dotenv")
config(); // https://github.com/sveltejs/sapper/issues/122

// add your Project Key
const _deta = Deta(process.env['DETA_KEY']);
// const _deta = Deta('b0mp9xi4_dwrRQE6DHrWTE6x7UEzmgLHnUFxibmPa');
const drive = _deta.Drive("uploads");

const apiEditorKey = process.env.AIRTABLE_PRIVATE_API
const baseId = process.env.AIRTABLE_PRIVATE_BASE


const fastify = require('fastify')
const cors = require('@fastify/cors')
// const urldata = require('fastify-url-data')


const app = fastify({ logger: false })
// app.register(urldata)
app.register(cors, {
  // put your options here
  origin: ['*', 'http://localhost:3000'],
  methods: ['*'],
  // credentials: true,
  // allowedHeaders: 'Accept, X-Requested-With, Content-type'
  allowedHeaders: '*'
})


app.get('/', function (request, reply) {
  reply.send("test")
})


app.get("/download/:name", async (req, res) => {
  const name = req.params.name;
  const img = await drive.get(name);
  const buffer = await img.arrayBuffer();
  const type = mime.lookup(name)

  //   return res.send(type);
  res.headers({
    'Content-Type': 'image/jpeg', // uncommenting headers makes Chrome show it
    // 'Content-disposition': `attachment; filename="${name}"`, // downloads
    'Content-Disposition': `inline; filename=${name}`, // shows in browser
  })

  res.send(Buffer.from(buffer));
});


// for local node testing only
app.listen(3000, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  app.log.info(`server listening on ${address}`)
})

module.exports = app

