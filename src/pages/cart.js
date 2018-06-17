import React from 'react';
import { Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import config from '../config/index';
import Seo from '../components/Seo';
import Heading from '../components/Heading';

const getNetworkStatus = gql`
  {
    isConnected @client
  }
`;

export default () => {
  console.log('cart ready');

  return (
    <div className="section">
      <Seo
        title="Cart"
        description="Your order items"
        url={`${config.siteUrl}/cart`}
      />
      <Heading>Cart</Heading>
      <p>table here</p>
      <Query query={getNetworkStatus}>
        {({ data }) => (
          <div>
            <p>Status: {console.log('data', data)}</p>
            <ApolloConsumer>
              {client => (
                <div>
                  <button
                    onClick={() =>
                      client.writeData({
                        data: { isConnected: !data.isConnected },
                      })
                    }
                  >
                    Add Todo
                  </button>
                </div>
              )}
            </ApolloConsumer>
          </div>
        )}
      </Query>
    </div>
  );
};

// export const cartQuery = graphql``;
