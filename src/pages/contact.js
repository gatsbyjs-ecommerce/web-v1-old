import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Heading from '../components/Heading';
import ContactForm from '../components/ContactForm';
import SocialIcons from '../components/SocialIcons';

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

export default ({ data }) => {
  const contact = data.contentfulHome;
  return (
    <Container className="section">
      <Helmet title="Contact" />
      <Heading>Get In touch</Heading>
      <div className="columns">
        <div
          className="column is-two-fifths"
          style={{ borderRight: '1px solid #eee' }}
        >
          <p>
            If you have any question or enquiry, feel free to get in touch with
            us
          </p>
          <p>
            <i className="fas fa-map-marker" />
            <a href="#" className="is-size-6">
              {contact.address}
            </a>
          </p>
          <p>
            <i className="fas fa-mobile" />
            <a href={`tel:${contact.telephone}`} className="is-size-6">
              {contact.telephone}
            </a>
          </p>
          <p>
            <i className="fas fa-envelope-open" />
            <a href={`mailto:${contact.email}`} className="is-size-6">
              {contact.email}
            </a>
          </p>
          <br />
          <br />
          <SocialIcons data={contact} />
        </div>
        <div className="column">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
};

export const contactQuery = graphql`
  query Contact {
    contentfulHome {
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
