import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { CachePersistor } from 'apollo-cache-persist';

const cacheKey = 'apollo-cache-persist';

// Update default values
const defaults = {
  isConnected: true,
};

const cache = new InMemoryCache();
// const persistor = new CachePersistor({
//   cache,
//   key: cacheKey,
//   storage: window ? window.localStorage : global.localStorage,
//   debug: true,
// });
// const cacheExists = localStorage.getItem(cacheKey);
// // console.log('cacheExists', cacheExists);
// if (!cacheExists) {
//   // console.log('set local stoarage');
//   localStorage.setItem(cacheKey, `{"ROOT_QUERY":${JSON.stringify(defaults)}}`);
// }
// setTimeout(() => persistor.restore(), 1000);

export default withClientState({
  defaults,
  cache,
});
