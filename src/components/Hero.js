import React from 'react';
import styled from 'styled-components';

import img from '../../static/images/home/hero-banner.png';

const Wrapper = styled.div`
  height: 47.5rem;
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
  margin-top: 7px;
`;

const Content = styled.div`
  padding: 11rem 19rem;
  h1 {
    margin-right: 6rem;
    margin-top: 1rem;
  }
  p {
    margin-right: 9rem;
    margin-bottom: 2rem;
  }
  .button {
    border: 1px solid #384aeb;
    padding: 12px 41px;
    height: 3.5rem;
    background: #384aeb;
    transition: all 0.4s ease;
    color: #fff;
    :hover {
      background: #f1f6f7;
      color: #000;
    }
  }
`;

const Hero = () => (
  <Wrapper className="columns">
    <div className="column is-4">
      <ImageWrapper>
        <img src={img} alt="Cart With Things" />
      </ImageWrapper>
    </div>
    <div className="column is-8">
      <Content>
        <h2 className="is-size-3">Shop is fun</h2>
        <h1 className="title is-size-1 has-text-dark has-text-weight-bold is-uppercase">
          Browse our premium product
        </h1>
        <p className="has-text-weight-semibold">
          Us which over of signs divide dominion deep fill bring they are meat
          beho upon own earth without morning over third. Their male dry. They
          are great appear whose land fly grass.
        </p>
        <a className="button is-rounded has-text-weight-bold">Browse Now</a>
      </Content>
    </div>
  </Wrapper>
);

export default Hero;
