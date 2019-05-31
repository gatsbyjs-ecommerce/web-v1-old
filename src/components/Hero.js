import React from 'react';
import styled from 'styled-components';

import img from '../../static/images/home/hero-banner.png';
import Button from './Button';

const Wrapper = styled.div`
  height: 49.5rem;
  .is-4 {
    background-color: #384aeb;
  }
  .is-8 {
    background-color: #f1f6f7;
  }
`;

const ImageWrapper = styled.div`
  margin-left: 23rem;
  position: absolute;
  margin-top: 39px;
`;

const Content = styled.div`
  padding: 11rem 19rem;
  @media only screen and (max-width: 768px) {
    padding: 2.5rem;
  }
  h1 {
    margin-right: 6rem;
    margin-top: 1rem;
    font-size: 3rem;
    @media only screen and (max-width: 768px) {
      font-size: 1.5rem;
      margin-right: 0rem;
      margin-top: 1rem;
    }
  }
  p {
    margin-right: 9rem;
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px) {
      margin-right: 0rem;
      margin-bottom: 0rem;
    }
  }
`;

const Hero = () => (
  <Wrapper className="columns">
    <div className="column is-4 is-hidden-mobile">
      <ImageWrapper>
        <img src={img} alt="Cart With Things" />
      </ImageWrapper>
    </div>
    <div className="column is-8">
      <Content>
        <h2 className="is-size-3">Shop is fun</h2>
        <h1 className="title has-text-dark has-text-weight-bold is-uppercase">
          Browse our premium product
        </h1>
        <p className="has-text-weight-semibold">
          Us which over of signs divide dominion deep fill bring they are meat
          beho upon own earth without morning over third. Their male dry. They
          are great appear whose land fly grass.
        </p>
        <Button text="Browse Now" />
      </Content>
    </div>
  </Wrapper>
);

export default Hero;
