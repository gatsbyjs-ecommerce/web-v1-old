import React from 'react';
import styled from 'styled-components';
// import ReactImageMagnify from 'react-image-magnify';
// import Magnifier from 'react-magnifier';
import ReactImageZoom from 'react-image-zoom';

import Button from '../Button';
// import img from '../../../static/images/home/product1.png';

const Container = styled.div`
  img {
    width: 90%;
    height: auto;
  }

  .col {
    margin-top: 2.5%;
  }

  h1 {
    font-size: 24px;
  }

  .cost {
    font-size: 24px;
    font-weight: 700;
    color: #384aeb;
  }

  ul li a {
    color: #555;
  }

  .category {
    margin-right: 6%;
  }

  .household {
    margin-right: 3.6%;
  }

  .description {
    margin-top: 8%;
    margin-right: 18%;
  }

  .control {
    width: 15% !important;
  }

  .margin {
    margin-top: 12px;
    margin-right: 1rem;
  }

  .is-flex {
    margin-top: 2.5rem;
    justify-content: center;
  }
`;

const props = {
  width: 400,
  zoomWidth: 500,
  img: '/images/home/product1.png',
};

const ItemDescription = () => (
  <Container className="columns">
    <div className="column is-4">
      <ReactImageZoom {...props} />
      {/* <ReactImageMagnify  // This is Another method to magnify image
        {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: img,
          },
          largeImage: {
            src: img,
            width: 1200,
            height: 600,
          },
        }}
      /> */}
    </div>
    <div className="column col">
      <h1 className="has-text-black has-text-weight-bold">
        Faded SkyBlu Denim Jeans
      </h1>
      <p className="cost">$149.99</p>
      <ul>
        <li>
          <a className="category">Category</a>
          <span className="household">:HouseHold</span>
        </li>
      </ul>
      <ul>
        <li>
          <a>Availability</a>
          <span>:In Stock</span>
        </li>
      </ul>
      <p className="description">
        Mill Oil is an innovative oil filled radiator with the most modern
        technology. If you are looking for something that can make your interior
        look awesome, and at the same time give you the pleasant warm feeling
        during the winter.
      </p>
      <div className="is-flex">
        <p className="margin">Quantity:</p>
        <div className="control margin">
          <input className="input" type="number" placeholder="1" />
        </div>
        <Button text="Add to Cart" width="11.5rem" />
      </div>
    </div>
  </Container>
);

export default ItemDescription;
