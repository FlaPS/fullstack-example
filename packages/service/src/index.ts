import * as express from 'express'
import * as bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import routes from './router'
import schema from './schema'
import {port, host} from '../config.json'
import {Server} from 'http'

const app = express()
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  if (req.method === 'OPTIONS') {
    return res.status(200).send({})
  }
  return next()
})

app.use('/api', bodyParser.json({ type: 'application/json' }), routes)
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}))

const promise = new Promise<Server>(resolve => {
    const server = app.listen(port, host, () => {
        console.log(`Server on ${port}`)
        resolve(server)
    })
})

export default promise

