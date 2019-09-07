import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';

import GlobalStyle, { theme } from '../utils/theme';
import config from '../utils/config';
import apolloClient from '../utils/apolloClient';
import Header from './Header';

const Container = styled.div`
  min-height: 70vh;
`;

const IndexLayout = ({ children, hideHeader }) => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={apolloClient}>
      <>
        <Helmet>
          <title>{config.siteName}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta description={config.description} />
        </Helmet>
        <GlobalStyle />
        {!hideHeader && <Header />}
        <Container>{children}</Container>
      </>
    </ApolloProvider>
  </ThemeProvider>
);

export default IndexLayout;
