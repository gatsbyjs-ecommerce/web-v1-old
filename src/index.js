import { ApolloServer } from 'apollo-server';

import schema from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({ schema, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
