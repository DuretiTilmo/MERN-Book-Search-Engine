const { User, Book } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate('savedBooks');
        },
        books: async () => {
            return await Book.find({});
        },
        saveBook : async (parent, { _id }) => {
            return await Book.findById(_id).populate('books');
          },
    },
    Mutation: {
        addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);
    
          return { token, user };
        }
}
};
module.exports = resolvers;