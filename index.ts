import {graphqlHTTP} from 'express-graphql'
import * as express from 'express'
import schema from './src/graphql/schema/schema'
import mongoose from './mongoose/index'
const app = express()

mongoose.connect('mongodb://localhost:27017/todoList')
const db = mongoose.connection 
db.once('open', () => console.log('connected to db'))


const port = 5000 


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

