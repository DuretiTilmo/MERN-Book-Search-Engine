const { gql } = require('apollo-server-express');

const typeDefs = gql`
type addUser {
    _id: ID
    username: String
    email: String
    
}
type saveBook { 
            bookId: String
            title: String
            author: String
            description: String
            image: String
            link: String
        }

type removeBook {
    bookId: String
    users: [User]

}

type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]
}

type Book {
    bookId: String
    title: String
    author: String
    description: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

`



module.exports = typeDefs;
