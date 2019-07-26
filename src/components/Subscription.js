import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import swal from 'sweetalert';
import { Mutation } from 'react-apollo';

import SubscriptionForm from './SubscriptionForm';

const subscribeMutation = gql`
  mutation subscribe($email: String!) {
    subscribe(email: $email) {
      email
    }
  }
`;

const Card = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 5rem;
`;

const Container = styled.div`
  width: 85%;
  height: 24.2rem;
  box-shadow: 0px 3px 15px rgba(10, 10, 10, 0.1),
    4px 4px 11px 1px rgba(10, 10, 10, 0.1);
  font-family: 'Oswald', sans-serif;
  border-radius: 10px;
  @media only screen and (max-width: 768px) {
    width: 90%;
    height: 26rem;
  }
  .media {
    margin-top: 2.5rem;
  }
  h1 {
    margin-top: 2.2rem;
    font-size: 2.2rem;
    color: #000;
    @media only screen and (max-width: 768px) {
      margin-top: 2rem;
    }
  }
  p {
    font-size: 1.19rem;
  }
  .content {
    padding: 1% 18%;
    @media only screen and (max-width: 768px) {
      display: inline;
      padding: 0;
    }
    @media only screen and (max-width: 1042px) and (min-width: 769px) {
      padding: 5% 5%;
    }
  }
  input {
    height: 3.5rem;
    padding: 0rem 1rem;
    margin-right: 1.5rem;
    @media only screen and (max-width: 768px) {
      padding: 0rem;
      margin-right: 0rem;
    }
  }
`;

class Subscription extends React.Component {
  onSuccess = () => {
    swal('You have been successfully subscribed!');
  };

  render() {
    return (
      <Card>
        <Container className="card">
          <div className="card-content has-text-centered">
            <div className="media">
              <div className="media-content has-text-centered">
                <h1 className="has-text-weight-bold">
                  GET UPDATE FROM ANYWHERE
                </h1>
                <p>Subscribe us to get our latest updates</p>
              </div>
            </div>
            <div className="content">
              <Mutation
                mutation={subscribeMutation}
                update={this.onSuccess}
                onError={error => {
                  swal(
                    'Issue!',
                    error.message.replace('GraphQL error: ', ''),
                    'warning',
                  );
                }}>
                {subscription => (
                  <SubscriptionForm
                    handleUpdate={dataNew => {
                      return subscription({
                        variables: dataNew,
                      });
                    }}
                  />
                )}
              </Mutation>
            </div>
          </div>
        </Container>
      </Card>
    );
  }
}

export default Subscription;
