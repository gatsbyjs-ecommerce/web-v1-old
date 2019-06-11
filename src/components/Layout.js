import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ApolloProvider } from 'react-apollo';
import ReactGA from 'react-ga';
import { StaticQuery, graphql } from 'gatsby';

import config from '../config';
import apolloClient from '../utils/apolloClient';
import Header from './Header';
import Footer from './Footer';

const indexLayoutQuery = graphql`
query {
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

class IndexLayout extends React.Component {
  componentWillMount() {
    ReactGA.initialize(config.googleAnalytics, {
      // debug: config.DEBUG,
    });
  }

  render() {
    const {
      children,
      // data: { contentfulHome: home },
    } = this.props;
    // TODO: fix this
    const home = {};

    return (
      <ApolloProvider client={apolloClient}>
        <div>
          <Helmet
            title={config.siteName}
            meta={[{ name: 'description', content: config.description }]}
          />
          {/* <StaticQuery
            query={indexLayoutQuery}
            render={data => {
              const layout = data.contentfulHome;
              console.log(layout)
              return (
                layout.map(item =>
                )
              )
            }
            }
          /> */}
          <div className="container">
            <Header home={home} />
            {children}
          </div>
          <Footer home={home} />
        </div>
      </ApolloProvider>
    );
  }
}

IndexLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default IndexLayout;

// # export const indexLayoutQuery = graphql`
// #   query IndexLayout {
// #     contentfulHome {
// #       telephone
// #       email
// #       address
// #       facebook
// #       twitter
// #       instagram
// #       pinterest
// #     }
// #   }
// # `;
