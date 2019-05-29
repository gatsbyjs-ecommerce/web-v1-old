import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 59%;
  height: 22.2rem;
`;

const SubscriptionForm = () => (
  <Container className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">John Smith</p>
          <p className="subtitle is-6">@johnsmith</p>
        </div>
      </div>

      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{' '}
        <a href="#">#responsive</a>
        <br />
      </div>
    </div>
  </Container>
);

export default SubscriptionForm;
