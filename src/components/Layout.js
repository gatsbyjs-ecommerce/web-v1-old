import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import GlobalStyle, { theme } from '../utils/theme';
import config from '../utils/config';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  min-height: 70vh;
`;

const query = graphql`
  query LayoutQuery {
    sanitySiteSettings {
      description
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

const IndexLayout = ({ children, hideHeader }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          <title>{config.siteName}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta description={config.description} />
        </Helmet>
        <GlobalStyle />
        <StaticQuery
          query={query}
          render={data => {
            const home = data.sanitySiteSettings;
            return (
              <>
                {!hideHeader && <Header home={home} />}
                <Container>{children}</Container>
                <Footer home={home} />
              </>
            );
          }}
        />
      </>
    </ThemeProvider>
  );
};

export default IndexLayout;
