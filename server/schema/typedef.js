const { gql } = require("apollo-server")


const typeDefs = gql`
type User{
    id:ID!
    name:String!
    username:String!
    phone:String!
}

input CreateUserInput{
    name:String!
    username:String!
    phone:String!

}
input updateUser{
    id:ID!
    newUserName:String!
}
type Query{
users:[User]
user(id:ID!):User

}
type Mutation{
    createUser(input:CreateUserInput! ):User
    updateUser(input:updateUser!):User
    deleteUser(id:ID!):User
}

`;
module.exports={typeDefs}