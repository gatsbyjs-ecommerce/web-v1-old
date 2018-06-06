import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ApolloProvider } from 'react-apollo';

import config from '../config/index';
import apolloClient from '../utils/apollo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexLayout = ({ children }) => (
  <ApolloProvider client={apolloClient}>
    <div>
      <Helmet
        title={config.siteName}
        meta={[{ name: 'description', content: config.description }]}
      />
      <div className="container">
        <Header />
        {children()}
      </div>
      <Footer />
    </div>
  </ApolloProvider>
);

IndexLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default IndexLayout;
