import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Subscriber {
    email: String
  }

  type Mutation {
    subscribe(email: String!): Subscriber
    contact(email: String!, name: String!, message: String!): Subscriber
  }
`;

export default typeDefs;
