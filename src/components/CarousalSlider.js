import React from 'react';
import styled from 'styled-components';

import img from '../../static/images/home/hero-slide1.png';

const Container = styled.div`
  .container {
    position: relative;
    width: 98%;
  }

  .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }

  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    top: 87%;
    left: 28%;
  }

  .container:hover .image {
    opacity: 0.3;
  }

  .container:hover .middle {
    opacity: 1;
  }

  .text {
    position: relative;
    background-color: #384aeb;
    color: white;
    font-size: 16px;
    padding: 11px 16px;
  }

  h6 {
    font-size: 1.25rem;
  }
`;

const CarousalSlider = () => (
  <Container>
    <div className="container">
      <img src={img} alt="Avatar" className="image" />
      <div className="middle">
        <div className="text">
          <h6 className="has=text-weight-bold">Wireless Headphone</h6>
          <p>Accessories Item</p>
        </div>
      </div>
    </div>
  </Container>
);

export default CarousalSlider;
