import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import { graphql } from 'gatsby';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import swal from 'sweetalert';

import config from '../config/index';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import ContactForm from '../components/ContactForm';
import SocialIcons from '../components/SocialIcons';
import Loading from '../components/Loading';

const Container = styled.section`
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

const contactMutation = gql`
  mutation contact($email: String!, $name: String!, $message: String!) {
    contact(email: $email, name: $name, message: $message) {
      email
    }
  }
`;

export default class Contact extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/contact');
  }

  onSuccess = () => {
    swal(
      'Thank you!',
      'Your message has been successfully sent. We will contact you very soon!',
    );
  };

  render() {
    const { data } = this.props;
    const contact = data.contentfulHome;

    return (
      <Layout>
        <Container className="section">
          <div className="container">
            <Seo
              title="Contact"
              description="Get In Touch"
              url={`${config.siteUrl}/contact`}
            />
            <Heading>Get In touch</Heading>
            <div className="columns">
              <div
                className="column is-two-fifths"
                style={{ borderRight: '1px solid #eee' }}>
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
                <Mutation
                  mutation={contactMutation}
                  update={this.onSuccess}
                  onError={error => {
                    swal(
                      'Issue!',
                      error.message.replace('GraphQL error: ', ''),
                      'warning',
                    );
                  }}>
                  {(contactData, { loading }) => {
                    return (
                      <React.Fragment>
                        <ContactForm
                          handleUpdate={dataNew => {
                            return contactData({
                              variables: dataNew,
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
