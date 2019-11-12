import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  span {
    font-weight: bold;
  }
  .alignment {
    align-self: center;
  }
  .subtext {
    color: #f1a51b !important;
  }
`;
const MyOrderItem = () => (
  <Section className="columns">
    <div className="column">
      <div className="media">
        <div className="media-left">
          <figure className="image is-128x128">
            <img src="./images/home/hero-slide1.png" alt="placeholder" />
          </figure>
        </div>
        <div className="media-content">
          <h1 className="title is-6">
            Netting Myconus <br /> Tunic Dreass
          </h1>
          <p className="subtitle is-6">By: milly cyrus</p>
          <p className="subtitle is-6">
            Price: <span>$12</span>
          </p>
        </div>
      </div>
    </div>
    <div className="column" />
    <div className="column alignment">
      <h6 className="title is-6">Status</h6>
      <p className="subtitle is-5 subtext has-text-danger">In - Transit</p>
    </div>
    <div className="column alignment">
      <h6 className="title is-6">Delivery expected by </h6>
      <p className="subtitle is-5">24 december 2016</p>
    </div>
  </Section>
);

export default MyOrderItem;
