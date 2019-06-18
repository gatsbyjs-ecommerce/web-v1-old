import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ApolloProvider } from 'react-apollo'
import ReactGA from 'react-ga'

import config from '../config'
import apolloClient from '../utils/apolloClient'
import Header from '../components/Header'
import Footer from '../components/Footer'

class IndexLayout extends React.Component {
  componentWillMount() {
    ReactGA.initialize(config.googleAnalytics, {
      debug: config.DEBUG,
    })
  }

  render() {
    const {
      children,
      // data: { contentfulHome: home },
    } = this.props

    return (
      <ApolloProvider client={apolloClient}>
        <div>
          <Helmet
            title={config.siteName}
            meta={[{ name: 'description', content: config.description }]}
          />
          <div>
            <Header />
            {children()}
          </div>
          <Footer />
        </div>
      </ApolloProvider>
    )
  }
}

IndexLayout.propTypes = {
  children: PropTypes.func.isRequired,
}

export default IndexLayout
