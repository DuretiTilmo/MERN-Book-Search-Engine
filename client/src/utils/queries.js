import { gql } from '@apollo/client';

export const GET_ME = gql`
query getme($email: String!, $password: String!) {
    getme(email: $email, password: $password) {
        token
    user { 
      _id
      username
    }
  }
`;
