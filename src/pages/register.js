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
import RegisterForm from '../components/RegisterForm';
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

const LoginLink = styled(Link)`
  :hover {
    color: #394aeb;
  }
`;

const registerMutation = gql`
  mutation register($email: String!, $password: String!) {
    register(input: { email: $email, password: $password }) {
      jwt
      user {
        id
        email
      }
    }
  }
`;

export default class Register extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/register');
  }

  onRegisterSuccess = async (cache, { data: { register } }) => {
    // console.log('onRegisterSuccess', register);
    // store token in local storage
    await window.localStorage.setItem('token', register.jwt);
    window.location.replace('/');
  };

  render() {
    return (
      <Layout>
        <Container className="section">
          <div className="container">
            <Seo
              title="Register"
              description="Register Yourself"
              url={`${config.siteUrl}/Register`}
            />
            <Heading>Register</Heading>
            <div className="columns">
              <div className="column is-half is-hidden-mobile">
                <Mutation
                  mutation={registerMutation}
                  update={this.onRegisterSuccess}
                  onError={error => {
                    swal(
                      'Issue!',
                      error.message.replace('GraphQL error: ', ''),
                      'warning',
                    );
                  }}>
                  {register => (
                    <RegisterForm
                      handleUpdate={data => {
                        return register({
                          variables: data,
                        });
                      }}
                    />
                  )}
                </Mutation>
              </div>
              <div className="column is-hidden-tablet">
                <Mutation
                  mutation={registerMutation}
                  update={this.onRegisterSuccess}
                  onError={error => {
                    swal(
                      'Issue!',
                      error.message.replace('GraphQL error: ', ''),
                      'warning',
                    );
                  }}>
                  {(register, { loading }) => {
                    return (
                      <React.Fragment>
                        <RegisterForm
                          handleUpdate={data => {
                            return register({
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
            <div className="columns">
              <div className="column link-column">
                <p>
                  Already have an account?
                  <LoginLink to="/login">
                    <strong>Login Here</strong>
                  </LoginLink>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}
