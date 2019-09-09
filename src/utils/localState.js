import { graphql } from 'gatsby';

export const typeDefs = graphql`
  type CartItem {
    id: ID!
    sku: String!
    title: String!
    price: Int!
    image: String
    quantity: Int!
  }

  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [CartItem]!
  }

  # extend type Launch {
  #   isInCart: Boolean!
  # }

  extend type Mutation {
    addOrRemoveFromCart(id: ID!): [CartItem]
  }
`;

export const resolvers = {};
