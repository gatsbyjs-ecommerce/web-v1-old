import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/Heading';
import config from '../config/index';
import MyAccountForm from '../components/MyAccountForm';

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
