const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    savedBooks: Book
    
}
type Book { 
            _id: ID
            title: String
            author: String
            description: String
            image: String
            link: String
        }

type Query {
    users: [User]
    books: [Book]

}

`



module.exports = typeDefs;
