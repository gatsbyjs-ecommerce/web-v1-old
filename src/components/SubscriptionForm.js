import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Card = styled.div`
  justify-content: center;
  display: flex;
`;

const Container = styled.div`
  width: 59%;
  height: 22.2rem;
  box-shadow: 0px 0px 0px rgba(10, 10, 10, 0.1),
    8px -6px 12px 1px rgba(10, 10, 10, 0.1);
  h1 {
    font-size: 2.2rem;
    color: #000;
  }
  p {
    font-size: 1.19rem;
  }
  .content {
    padding: 3rem 11rem;
  }
  input {
    height: 3.5rem;
    padding: 0rem 1rem;
    margin-right: 1.5rem;
  }
`;

const SubscriptionForm = () => (
  <Card>
    <Container className="card">
      <div className="card-content has-text-centered">
        <div className="media">
          <div className="media-content has-text-centered">
            <h1 className="has-text-weight-bold">GET UPDATE FROM ANYWHERE</h1>
            <p>
              Bearing Void gathering light light his eavening unto dont afraid
            </p>
          </div>
        </div>
        <div className="content is-flex">
          <input
            className="input is-rounded"
            type="text"
            placeholder="Your Email Address"
          />
          <Button text="Subscribe Now" />
        </div>
      </div>
    </Container>
  </Card>
);

export default SubscriptionForm;
