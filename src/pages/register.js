import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Link from 'gatsby-link';

import Layout from '../components/Layout';
import config from '../config/index';
import Seo from '../components/Seo';
import Heading from '../components/Heading';
import RegisterForm from '../components/RegisterForm';

const Container = styled.div`
  a {
    padding: 1rem;
    color: #4a4a4a;
  }
  p {
    padding: 0.2rem 0;
  }
  svg {
    color: #494949;
  }
  .columns {
    justify-content: center !important;
    display: -webkit-box !important;
  }
`;

export default class Register extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/contact');
  }

  render() {
    return (
      <Layout>
        <Container className="section">
          <div className="container">
            <Seo
              title="Login"
              description="Get In Touch"
              url={`${config.siteUrl}/Login`}
            />
            <Heading>Register</Heading>
            <div className="columns">
              <div className="column is-half">
                <RegisterForm />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <p>
                  Already have an account?
                  <Link to="/login">
                    <strong>Login Here</strong>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}

// export const contactQuery = graphql`
//   query Contact {
//     contentfulHome {
//       address
//       email
//       telephone
//       facebook
//       twitter
//       instagram
//       pinterest
//     }
//   }
// `;
