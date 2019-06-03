import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';

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
            <div className="column">
              <LoginForm />
            </div>
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
