import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`

export const SAVE_DOG = gql `
mutation Mutation($newDog: DogInput!) {
  saveDog(newDog: $newDog) {
    savedDogs {
      name
      age
      image
      location
      link
    }
  }
}
`

export const REMOVE_DOG = gql `
mutation Mutation($dogId: ID!) {
  removeDog(dogId: $dogId) {
    _id
    username
    email
    savedDogs {
      dogId
      name
      age
      image
      location
      link
    }
  }
}
`

