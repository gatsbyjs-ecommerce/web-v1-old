import { ApolloServer } from 'apollo-server';

import schema from './schema';
import resolvers from './resolvers';
import config from './config';

const server = new ApolloServer({ typeDefs: schema, resolvers });

server
  .listen({
    http: {
      port: config.get('port'),
    },
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
