import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { ApolloProvider } from 'react-apollo';

import config from '../config/index';
import apolloClient from '../utils/apollo';
import Header from '../components/Header';
import './index.css';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const IndexLayout = ({ children }) => (
  <ApolloProvider client={apolloClient}>
    <div>
      <Helmet
        title={config.siteName}
        meta={[{ name: 'description', content: config.description }]}
      />
      <Header />
      <Container>{children()}</Container>
    </div>
  </ApolloProvider>
);

IndexLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default IndexLayout;
