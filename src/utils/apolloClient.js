import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, Observable } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { CachePersistor } from 'apollo-cache-persist';
import { onError } from 'apollo-link-error';
// import localforage from 'localforage';
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

// const cacheKey = 'apollo-cache-persist';

const cache = new InMemoryCache();
// const persistor = new CachePersistor({
//   cache,
//   key: cacheKey,
//   storage: window ? window.localStorage : global.localStorage,
//   debug: Config.DEBUG,
// });
// const cacheExists = localStorage.getItem(cacheKey);
// console.log('cacheExists', cacheExists);
// if (!cacheExists) {
//   console.log('set local stoarage');
//   localStorage.setItem(
//     cacheKey,
//     `{"ROOT_QUERY":${JSON.stringify(clientState.defaults)}}`,
//   );
// }
// setTimeout(() => persistor.restore(), 1000);

const request = async operation => {
  const token = localStorage.getItem('token');
  operation.setContext({
    headers: {
      authorization: token,
    },
  });
};

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle;
      Promise.resolve(operation)
        .then(oper => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    }),
);

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      console.log('onError', graphQLErrors, networkError);
    }),
    requestLink,
    clientState,
    new HttpLink({
      uri: GRAPHQL_URL,
      credentials: 'same-origin',
    }),
  ]),
  cache,
});

// client.restore();
// setTimeout(() => client.restore(), 2000);

// Purge persistor when the store was reset.
// client.onResetStore(() => persistor.purge());

export default client;
