const { Userlist } = require("../Data");

const resolvers = {
  Query: {
    users() {
      return Userlist;
    },
    user(parent, args) {
      console.log(args.id);
      return Userlist.find((e) => e.id == args.id);
    },
  },


  Mutation: {


    createUser(parent, args) {

      const user = args.input;
      const lastId = Userlist[Userlist.length - 1].id;
      user.id = lastId + 1;
      Userlist.push(user);
      return user;

    },

    updateUser(parent, args) {

      const { id, newUserName } = args.input;
      let updatedUser;
      Userlist.forEach((list) => {
        if (list.id == id) {
          list.username = newUserName;
          updatedUser = list;
        }
      });
      return updatedUser;
    },


    deleteUser(parent, args) {
        const id = Number(args.id);
        const userIndex = Userlist.findIndex(user => user.id === id);
        if (userIndex === -1) return null;
      
        const deletedUser = Userlist[userIndex];
        Userlist.splice(userIndex, 1);
        return deletedUser;
      }
      
  },
};
module.exports = { resolvers };
