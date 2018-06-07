import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Heading from '../components/Heading';
import ContactForm from '../components/ContactForm';
import SocialIcons from '../components/SocialIcons';

const Container = styled.div`
  span {
    padding: 1rem;
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
        <div className="column is-two-fifths">
          <div className="box">
            <p>
              If you have any question or enquiry, feel free to get in touch
              with us
            </p>
            <p>
              <i className="fas fa-map-marker" />
              <span className="is-size-6">{contact.address}</span>
            </p>
            <p>
              <i className="fas fa-mobile" />
              <span className="is-size-6">{contact.telephone}</span>
            </p>
            <p>
              <i className="fas fa-envelope-open" />
              <span className="is-size-6">{contact.email}</span>
            </p>
            <br />
            <br />
            <SocialIcons data={contact} />
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
