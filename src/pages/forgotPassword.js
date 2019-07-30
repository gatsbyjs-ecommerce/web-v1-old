import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import swal from 'sweetalert';

import Layout from '../components/Layout';
import config from '../config/index';
import Seo from '../components/Seo';
import Heading from '../components/Heading';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
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

const forgotPasswordMutation = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(input: { email: $email }) {
      success
    }
  }
`;

export default class Login extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/login');
  }

  onSuccess = () => {
    swal(
      'Success!',
      'Please check your email, we have sent instructions to reset password.',
    );
  };

  render() {
    return (
      <Layout>
        <Container className="section">
          <div className="container">
            <Seo
              title="Forgot Password"
              description="Get In Touch"
              url={`${config.siteUrl}/forgotPassword`}
            />
            <Heading>Forgot Password</Heading>
            <div className="columns">
              <div className="column is-half is-hidden-mobile">
                <Mutation
                  mutation={forgotPasswordMutation}
                  update={this.onSuccess}
                  onError={error => {
                    swal(
                      'Issue!',
                      error.message.replace('GraphQL error: ', ''),
                      'warning',
                    );
                  }}>
                  {(forgotPassword, { loading }) => {
                    return (
                      <React.Fragment>
                        <ForgotPasswordForm
                          handleUpdate={data => {
                            return forgotPassword({
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
                  mutation={forgotPasswordMutation}
                  update={this.onSuccess}
                  onError={error => {
                    swal(
                      'Issue!',
                      error.message.replace('GraphQL error: ', ''),
                      'warning',
                    );
                  }}>
                  {(forgotPassword, { loading }) => {
                    return (
                      <React.Fragment>
                        <ForgotPasswordForm
                          handleUpdate={data => {
                            return forgotPassword({
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
          </div>
        </Container>
      </Layout>
    );
  }
}
