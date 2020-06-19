const url = require('url')
const MongoClient = require('mongodb').MongoClient
let cachedDb = null
const requestIp = require('request-ip')

async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb
  }
  const config = {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
  const client = await MongoClient.connect(uri, config)
  const db = await client.db(url.parse(uri).pathname.substr(1))
  cachedDb = db
  return db
}

module.exports = async (req, res) => {
    const db = await connectToDatabase(process.env.MONGODB_URI)
    const collection = await db.collection('messages')


    switch (req.method) {
        // case 'GET':
        //     console.log(req.query)
        //     collection.find({}).toArray().then(result => {
        //         res.status(200).json(result)
        //     })
            
        //     break
        case 'POST':
            const data = req.body
            data.extIp = requestIp.getClientIp(req)
            data.time = Date.now()
            console.log(data)
            collection.insertOne(data).then(result => {
                collection.findOne(result.insertedId).then(r => {
                    res.status(200).json(r)
                })
            })
            break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
