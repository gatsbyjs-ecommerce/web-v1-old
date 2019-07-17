import { gql } from 'apollo-server';

const typeDefs = gql`
  type Product {
    id: ID!
    title: String
    slug: String
    status: String
  }

  type Order {
    id: ID!
    product: Product
    orderId: String
    createTime: String
    customerCountry: String
    customerName: String
    customerAddress1: String
    customerAddress2: String
    customerCity: String
    customerState: String
    customerPostcode: String
    customerEmail: String
    customerTelephone: String
    customerNotes: String
  }

  type Coupon {
    id: ID!
    name: String
    code: String
    status: String
    details: String
    discountPercentage: Int
    expiryDate: String
  }

  input OrderInput {
    tokenId: String!
    orderId: String!
    productIds: [String]!
    customerCountry: String!
    customerName: String!
    customerAddress1: String!
    customerAddress2: String
    customerCity: String!
    customerState: String!
    customerPostcode: String!
    customerEmail: String!
    customerTelephone: String!
    customerNotes: String
  }

  type Mutation {
    createOrder(input: OrderInput): Order
    validateCoupon(code: String!): Coupon
  }
`;

export default typeDefs;
