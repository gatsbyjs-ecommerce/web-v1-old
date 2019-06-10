import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import { graphql } from 'gatsby'

import config from '../config/index';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
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

export default class Contact extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/contact');
  }

  render() {
    const { data } = this.props;
    const contact = data.contentfulHome;

    return (
      <Layout>
        <Container className="section">
          <Seo
            title="Contact"
            description="Get In Touch"
            url={`${config.siteUrl}/contact`}
          />
          <Heading>Get In touch</Heading>
          <div className="columns">
            <div
              className="column is-two-fifths"
              style={{ borderRight: '1px solid #eee' }}
            >
              <p>
              If you have any question or enquiry, feel free to get in touch
              with us
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
      </Layout>
    );
  }
}

