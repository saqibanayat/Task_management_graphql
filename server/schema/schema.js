const User = require("../models/User");
const Task = require("../models/Task");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");
const { query } = require("express");

const TaskSchema = new GraphQLObjectType({
  name: "Task",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    user: {
      type: UserSchema,
      resolve(parent, args) {
        return User.findById(parent.user);
      },
    },
  }),
});
const UserSchema = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserSchema),
      resolve(parent, args) {
        return User.find();
      },
    },
    tasks: {
      type: new GraphQLList(TaskSchema),
      resolve(parent, args) {
        return Task.find();
      },
    },
    task: {
      type: TaskSchema,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Task.findById(args.id);
      },
    },
    user: {
      type: UserSchema,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
  },
});
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserSchema,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const user = new User({
          name: args.name,
          email: args.email,
          password: args.password,
        });
        return user.save();
      },
    },

    updateUser: {
      type: UserSchema,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        email: { type:GraphQLString },
      },
      resolve(parent, args) {
        return User.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              email: args.email,
            },
          },
          {
            new: true,
          }
        );
      },
    },
    deleteUser:{
        type:UserSchema,
        args:{id:{type:GraphQLID}},
        resolve(parent,args){
            return User.findByIdAndDelete(args.id)
        }
    },

    addTask:{
        type:TaskSchema,
        args:{
          title:{type:new GraphQLNonNull(GraphQLString)},
          description:{type:new GraphQLNonNull(GraphQLString)},
          userId:{type:new GraphQLNonNull(GraphQLID)}
        },
        resolve(parent,args){
const task = new Task({
  title:args.title,
  description:args.description,
  user:args.userId
})
return task.save();
        }
    },

    updateTask:{
      type:TaskSchema,
      args:{
        id:{type:new GraphQLNonNull(GraphQLID)},
        title:{type:new GraphQLNonNull(GraphQLString)},
        description:{type:new GraphQLNonNull(GraphQLString)}
      },
      resolve(parent,args){
        return Task.findByIdAndUpdate(args.id,{
          $set:{
            title:args.title,
            description:args.description
          }
        },{
            new:true
          })
      }
    },

  deleteTask:{
    type:TaskSchema,
    args:{id:{type:new GraphQLNonNull(GraphQLID)}},
  resolve(parent,args){
    return Task.findByIdAndDelete(args.id)

  }
  }

  },
});

module.exports = new GraphQLSchema({
  mutation: mutation,
  query: RootQuery,
});
