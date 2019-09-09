import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apolloClient';

export default ({ element }) => (
  <ApolloProvider client={apolloClient}>{element}</ApolloProvider>
);
