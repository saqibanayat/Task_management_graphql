const express = require('express')
const app = express()
const { createHandler } = require('graphql-http/lib/use/express');
const { buildSchema } = require('graphql');
const cors = require('cors')
const schema = require('../schema/schema');
const bodyParser = require('body-parser');
require('../config/dbconnect')
app.use(cors())
bodyParser.json()
app.use('/graphql', createHandler({
    schema,
    // rootValue: { hello: () => 'Hello world!' },
  }));

app.listen(8000,()=>{
    console.log('server is running on port:8000');
})