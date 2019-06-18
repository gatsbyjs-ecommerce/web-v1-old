import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Button from './Button';

const Container = styled.div`
  margin-top: 3rem;
  background-image: url('/images/home/parallax-bg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  @media only screen and (max-width: 768px) {
    background-image: none;
    background-color: #a3cbda;
    margin-top: -3rem;
  }

  .column {
    margin-left: 7%;
    @media only screen and (max-width: 768px) {
      margin-left: 0;
    }
  }

  h1 {
    margin-top: 5%;
    font-size: 3rem;
    @media only screen and (max-width: 768px) {
      font-size: 2rem;
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
`;
const discountQuery = graphql`{
  allContentfulHomeDiscountOffer {
    edges {
      node {
        title
        subtitle
        descritption {
          descritption
        }
      }
    }
  }
}
`;

const DiscountOffer = () => (
  <Container className="columns">
    <StaticQuery
      query={discountQuery}
      render={data => {
        const discountData = data.allContentfulHomeDiscountOffer.edges[0];
        return (
          <div className="column is-5 has-text-centered">
            <h1 className="has-text-weight-bold has-text-black">{discountData.node.title}</h1>
            <p className="is-size-3 has-text-weight-bold has-text-black">
              {discountData.node.subtitle}
            </p>
            <p className="has-text-black">{discountData.node.descritption.descritption}</p>
            <div className="btn">
              <Button text="Shop Now" link="/coupons" />
            </div>
          </div>
        );
      }
      }
    />

  </Container>
);

export default DiscountOffer;
