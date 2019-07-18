import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Link from 'gatsby-link';
import gql from 'graphql-tag';

import Layout from '../components/Layout';
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
  .link-column {
    justify-content: center;
    display: grid;
  }
`;

const RegisterLink = styled(Link)`
  :hover {
    color: #394aeb;
  }
`;

const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      jwt
      user {
        id
        email
        status
      }
    }
  }
`;

export default class Login extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/login');
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
            <Heading>Login</Heading>
            <div className="columns">
              <div className="column is-half is-hidden-mobile">
                <LoginForm />
              </div>
              <div className="column is-hidden-tablet">
                <LoginForm />
              </div>
            </div>
            <div className="columns link-column">
              <p>
                Don't have an account?
                <RegisterLink to="/register">
                  <strong>Register Here</strong>
                </RegisterLink>{' '}
                |
                <RegisterLink to="/forgotPassword">
                  <strong>Forgot Password?</strong>
                </RegisterLink>
              </p>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}
