const typeDefs = `#graphql
    type User {
        _id: ID!
        username: String!
        email: String!
        adopted: [Dog]
        saveDog: [Dog]
    }

    type Dog {
      _id: ID!
      name: String!
      description: String!
      image: String!
      type: String!
      weight: String
      height: String
      family: String
    }

    input DogInput{
      name: String!
      description: String!
      image: String!
      type: String!
      weight: String
      height: String
      family: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Donate {
        name: String!
        email: String!
        price: Float!
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        adoptDog(dogInput: DogInput): User
        saveDog(dogInput: DogInput): User
        removeDog(id: ID!): User
        donate(name: String!, email: String, price: Float!): Auth
    }
`

module.exports = typeDefs
