import React from 'react';
import styled from 'styled-components';

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

const MyAccount = () => (
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
            <MyAccountForm />
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);

export default MyAccount;
