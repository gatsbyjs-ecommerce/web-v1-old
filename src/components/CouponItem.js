import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  header {
    border-bottom: 1px solid rgba(10, 10, 10, 0.1);
  }
  .card-header {
    box-shadow: none !important;
  }
  h3 {
    justify-content: center;
  }
`;

export default ({ data }) => (
  <Container className="card">
    <header className="card-header">
      <h3 className="card-header-title is-size-5">{data.name}</h3>
    </header>
    <div className="card-content">
      <div className="content has-text-centered">{data.details.details}</div>
    </div>
    <nav className="level card-header" style={{ padding: '1rem 1rem' }}>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading  is-size-7">Coupon Code</p>
          <p className="title is-size-6 has-text-weight-bold">{data.code}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading is-size-7">Exipired Date</p>
          <p className="title is-size-6">
            {moment(data.expiryDate).format('Do MMM YYYY')}
          </p>
        </div>
      </div>
    </nav>
  </Container>
);
