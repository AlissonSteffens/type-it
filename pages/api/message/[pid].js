const url = require('url')
const MongoClient = require('mongodb').MongoClient
let cachedDb = null

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
        case 'GET':
            const {
                query: { pid },
              } = req
            collection.find({hash: pid}).toArray().then(result => {
                res.status(200).json(result)
            })
            
            break

        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
