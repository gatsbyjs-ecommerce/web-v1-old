import React from 'react';
import styled from 'styled-components';

import img from '../../static/images/home/hero-banner1.png';
import Button from './Button';

const Wrapper = styled.div`
  height: 40.5rem;
  @media only screen and (max-width: 768px) {
    height: 26rem;
  }
  .is-4 {
    background-color: #384aeb;
  }
  .content {
    background-color: #f1f6f7;
  }
`;

const ImageWrapper = styled.div`
  margin-left: 4rem;
  position: absolute;
  margin-top: 12px;
  @media screen and (max-width: 2500px) and (min-width: 1928px) {
    margin-left: 25rem;
    position: absolute;
    margin-top: 12px;
  }
`;

const Content = styled.div`
  margin: 13% 10% 0 21%;
  @media only screen and (max-width: 768px) {
    margin: 8% 4% 0 9%;
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
    <div className="column content">
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
        <Button text="Browse Now" link="/shop" />
      </Content>
    </div>
  </Wrapper>
);

export default Hero;
