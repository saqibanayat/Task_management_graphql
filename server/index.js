const {ApolloServer}= require('apollo-server')
const {typeDefs} =require('./schema/typedef')
const url = 8000
const {resolvers} = require('./schema/resolvers') 
const server = new ApolloServer({typeDefs,resolvers})


server.listen(url,()=>{
console.log(`server is running on port no:${url}`);
})