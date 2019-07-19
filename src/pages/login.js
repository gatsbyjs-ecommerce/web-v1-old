import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Link from 'gatsby-link';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import swal from 'sweetalert';

import apolloClient from '../utils/apolloClient';
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

  onLoginSuccess = async (cache, { data: { login } }) => {
    // console.log('onLoginSuccess', login);
    const { user, jwt } = login;
    // store token in local storage
    await window.localStorage.setItem('token', jwt);
    // const requiredConfirmations = user.store.requiredConfirmations.map(
    //   confirmation => ({
    //     ...confirmation,
    //     __typename: 'Confirmation',
    //   }),
    // );
    // // console.log('confiration', requiredConfirmations);
    // // sync data with local store
    // apolloClient
    //   .mutate({
    //     variables: {
    //       requiredConfirmations,
    //     },
    //   })
    //   .then(() => {
    //     // redirect to Home Page
    //     setTimeout(() => {
    //       window.location.replace('/');
    //     }, 1000);
    //   });
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
                  {login => (
                    <LoginForm
                      handleUpdate={data => {
                        console.log('login form', data);
                        return login({
                          variables: data,
                        });
                      }}
                    />
                  )}
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
                  {login => (
                    <LoginForm
                      handleUpdate={data => {
                        // console.log('login form', data);
                        return login({
                          variables: data,
                        });
                      }}
                    />
                  )}
                </Mutation>
              </div>
            </div>
            <div className="columns link-column">
              <p>
                Forgot Password? |
                <RegisterLink to="/forgotPassword">
                  <strong>
                    <u>Click Here</u>
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
