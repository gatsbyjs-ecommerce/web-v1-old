import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ApolloProvider } from 'react-apollo';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import config from '../config';
import apolloClient from '../utils/apolloClient';
import Header from '../components/Header';
import Footer from '../components/Footer';

class IndexLayout extends React.Component {
  render() {
    const {
      children,
      data: { contentfulHome: home },
    } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <div>
          <Helmet
            title={config.siteName}
            meta={[{ name: 'description', content: config.description }]}
          />
          <div className="container">
            <Header home={home} />
            {children()}
          </div>
          <Footer home={home} />
          <MessengerCustomerChat
            pageId="342814819542066"
            appId="2148643328701680"
          />
        </div>
      </ApolloProvider>
    );
  }
}

IndexLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default IndexLayout;

export const indexLayoutQuery = graphql`
  query IndexLayout {
    contentfulHome {
      telephone
      email
      address
      facebook
      twitter
      instagram
      pinterest
    }
  }
`;
