import ApolloClient from 'apollo-boost';

import Config from '../config';

const GRAPHQL_URL = Config.DEBUG
  ? Config.GRAPHQL_ENDPOINT_DEV
  : Config.GRAPHQL_ENDPOINT;

const client = new ApolloClient({
  uri: GRAPHQL_URL,
});

export default client;
