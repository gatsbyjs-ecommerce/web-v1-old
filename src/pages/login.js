import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Link from 'gatsby-link';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import swal from 'sweetalert';

import Layout from '../components/Layout';
import config from '../config/index';
import Seo from '../components/Seo';
import Heading from '../components/Heading';
import LoginForm from '../components/LoginForm';
import Loading from '../components/Loading';

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

  onLoginSuccess = async (cache, { data: { login } }) => {
    const { jwt } = login;

    await window.localStorage.setItem('token', jwt);
  };

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
                <Mutation
                  mutation={loginMutation}
                  update={this.onLoginSuccess}
                  onError={error => {
                    swal(
                      'Issue!',
                      error.message.replace('GraphQL error: ', ''),
                      'warning',
                    );
                  }}>
                  {(login, { loading }) => {
                    return (
                      <React.Fragment>
                        <LoginForm
                          handleUpdate={data => {
                            return login({
                              variables: data,
                            });
                          }}
                        />
                        {loading ? <Loading /> : null}
                      </React.Fragment>
                    );
                  }}
                </Mutation>
              </div>
              <div className="column is-hidden-tablet">
                <Mutation
                  mutation={loginMutation}
                  update={this.onLoginSuccess}
                  onError={error => {
                    swal(
                      'Issue!',
                      error.message.replace('GraphQL error: ', ''),
                      'warning',
                    );
                  }}>
                  {(login, { loading }) => {
                    return (
                      <React.Fragment>
                        <LoginForm
                          handleUpdate={data => {
                            return login({
                              variables: data,
                            });
                          }}
                        />
                        {loading ? <Loading /> : null}
                      </React.Fragment>
                    );
                  }}
                </Mutation>
              </div>
            </div>
            <div className="columns link-column">
              <p>
                Need Account?
                <RegisterLink to="/register">
                  <strong>
                    <u>Register Here</u>
                  </strong>
                </RegisterLink>
                |
                <RegisterLink to="/forgotPassword">
                  <strong>
                    <u>Forgot Password?</u>
                  </strong>
                </RegisterLink>
              </p>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}
