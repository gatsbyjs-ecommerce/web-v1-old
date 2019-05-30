import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 3rem;
  height: 30rem;
  background-image: url('/images/home/parallax-bg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  @media only screen and (max-width: 768px) {
    background-image: none;
    background-color: #a3cbda;
  }

  .column {
    margin-left: 7rem;
    @media only screen and (max-width: 768px) {
      margin-left: 0rem;
    }
  }

  h1 {
    margin-top: 5rem;
    font-size: 3rem;
    @media only screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .is-size-3 {
    margin-top: 1rem;
    @media only screen and (max-width: 768px) {
      margin-top: 0.5rem;
    }
  }

  .button {
    margin-top: 2.5rem;
    border: 1px solid #384aeb;
    padding: 12px 41px;
    height: 3.5rem;
    background: #384aeb;
    transition: all 0.4s ease;
    color: #fff;
    :hover {
      background: #99c7d7;
      color: #000;
    }
  }
`;

const DiscountOffer = () => (
  <Container className="columns">
    <div className="column is-5 has-text-centered">
      <h1 className="has-text-weight-bold has-text-black">Up To 50% Off</h1>
      <p className="is-size-3 has-text-weight-bold has-text-black">
        Winter Sale
      </p>
      <p className="has-text-black">Him she'd let them sixth saw light</p>
      <a className="button is-rounded has-text-weight-bold">Shop Now</a>
    </div>
  </Container>
);

export default DiscountOffer;
