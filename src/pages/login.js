import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Link from 'gatsby-link';

import config from '../config/index';
import Seo from '../components/Seo';
import Heading from '../components/Heading';
import LoginForm from '../components/LoginForm';

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
    justify-content: center;
  }
`;

export default class Login extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/contact');
  }

  render() {

    return (
      <Container className="section">
        <div className="container">
          <Seo
            title="Login"
            description="Get In Touch"
            url={`${config.siteUrl}/Login`}
          />
          <Heading>Login</Heading>
          <div className="columns">
            <div className="column is-half">
              <LoginForm />
            </div>
          </div>
          <div className="columns">
            <p>Don't have an account?<Link to="/register"><strong>Register Here</strong></Link></p>
          </div>
        </div>
      </Container>
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
