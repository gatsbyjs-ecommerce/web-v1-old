import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

import Config from '../config';
import clientState from './clientState';

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

const GRAPHQL_URL = Config.DEBUG
  ? Config.GRAPHQL_ENDPOINT_DEV
  : Config.GRAPHQL_ENDPOINT;

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  clientState,
});

export default client;
