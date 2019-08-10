import React from 'react';
import styled from 'styled-components';

import ButtonLink from './ButtonLink';

const Container = styled.div`
  margin-top: 3rem;
  height: 33rem;
  background-image: url('/images/home/parallax.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: #8dc0d3;
  background-position: center;
  @media only screen and (max-width: 768px) {
    background-image: none;
    background-color: #a3cbda;
    margin-top: -3rem;
    height: auto;
  }

  .column {
    margin-left: 7%;
    @media only screen and (max-width: 768px) {
      margin-left: 0;
    }
  }

  h1 {
    margin-top: 15%;
    font-size: 2.5rem;
    color: #ffffff;
    @media only screen and (max-width: 768px) {
      font-size: 2rem;
      color: #000;
    }
    @media only screen and (max-width: 1042px) and (min-width: 769px) {
      margin-top: 0;
      font-size: 1rem;
    }
  }

  .is-size-3 {
    @media only screen and (max-width: 768px) {
      margin-top: 0.5rem;
    }
  }

  .btn {
    margin: 7%;
  }

  p {
    color: #ffffff;
    @media only screen and (max-width: 768px) {
      color: #000;
    }
  }
`;

const Desc = styled.p`
  font-size: 1.5rem;
  color: #ffffff;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    color: #000;
  }
`;

class DiscountOffer extends React.Component {
  render() {
    const { home } = this.props;

    return (
      <Container className="columns">
        <div className="column is-5 has-text-centered">
          <h1 className="has-text-weight-bold color-text">
            {home.discountTitile}
          </h1>
          <p className="is-size-3 has-text-weight-bold color-text">
            {home.discountSubtitle}
          </p>
          <Desc className="color-text">{home.discountDescription}</Desc>
          <div className="btn">
            <ButtonLink text="Discounts Offers" link="/coupons" />
          </div>
        </div>
      </Container>
    );
  }
}

export default DiscountOffer;
