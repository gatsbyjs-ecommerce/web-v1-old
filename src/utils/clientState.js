import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Update default values
const defaults = {
  networkStatus: {
    __typename: 'NetworkStatus',
    isConnected: true,
  },
  cart: {
    __typename: 'Cart',
    count: 0,
    items: null,
  },
};

const cache = new InMemoryCache();

export default withClientState({
  resolvers: {},
  defaults,
  cache,
});
