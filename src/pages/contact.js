import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {withFormik} from 'formik';

import Heading from '../components/Heading';
import ContactForm from '../components/ContactForm';
import SocialIcons from '../components/SocialIcons';

const Container = styled.div`
  span{
    padding: 1rem;
  }
  p{
    padding: 1rem;
  }
  svg{
    color:#494949;
  }
`;

export default ({data}) => {
  const contact = data.contentfulHome;
  return (
    <Container className="section">
      <Helmet title="Contact" />
      <Heading>Get In touch</Heading>
      <div className="columns">
        <div className="column">
          <div className="box">
            <p>
              <i className="fas fa-map-marker is-size-4" />
              <span className="is-size-6">{contact.address}</span>
            </p>
            <p>
              <i className="fas fa-mobile is-size-4" />
              <span className="is-size-6">{contact.telephone}</span>
            </p>
            <p>
              <i className="fas fa-envelope-open is-size-4" />
              <span className="is-size-6">{contact.email}</span>
            </p>
            <p className="has-text-centered">
              <SocialIcons data={contact} />
            </p>

          </div>
        </div>
        <div className="column">
          <div className="box">
            <ContactForm />
          </div>

        </div>
      </div>
    </Container>
  );
};

export const contactQuery = graphql`
  query Contact {
    contentfulHome{
    address
    email
    telephone
    facebook
    twitter
    instagram
    pinterest
  }
  }
`;
