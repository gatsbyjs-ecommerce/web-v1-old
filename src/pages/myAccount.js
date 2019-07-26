import React from 'react';
import styled from 'styled-components';
import swal from 'sweetalert';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/Heading';
import config from '../config/index';
import MyAccountForm from '../components/MyAccountForm';

const Container = styled.div`
  .columns {
    justify-content: center;
  }
`;

const myAccountMutation = gql`
  mutation updateMe($email: String!) {
    updateMe(input: { email: $email }) {
      id
      email
      status
    }
  }
`;

class MyAccount extends React.Component {
  onSuccess = () => {
    swal('Success!', 'Your Account has been successfully updated!');
  };

  render() {
    return (
      <Layout>
        <Container className="section">
          <div className="container">
            <Seo
              title="My Account"
              description="Upgate your account"
              url={`${config.siteUrl}/myAccount`}
            />
            <Heading>My Account</Heading>
            <div className="columns">
              <div className="column is-half">
                <Mutation
                  mutation={myAccountMutation}
                  update={this.onSuccess}
                  onError={error => {
                    swal(
                      'Issue!',
                      error.message.replace('GraphQL error: ', ''),
                      'warning',
                    );
                  }}>
                  {myAccount => (
                    <MyAccountForm
                      handleUpdate={data => {
                        return myAccount({
                          variables: data,
                        });
                      }}
                    />
                  )}
                </Mutation>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default MyAccount;
