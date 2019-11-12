import React from 'react';
import styled from 'styled-components';

import config from '../config';

const Section = styled.div`
  span {
    font-weight: bold;
  }
  .subtext {
    color: ${config.themeColor} !important;
  }
  .media-content h1 {
    margin-bottom: 3rem;
  }
`;

const MobileSection = styled.div`
  justify-items: center;
  display: grid;
  background-color: #f3f3f3;
  margin: 1rem 0 1rem 0;
  .subtext {
    color: ${config.themeColor} !important;
  }
`;

const MyOrderItem = () => (
  <React.Fragment>
    <Section className="columns is-hidden-mobile">
      <div className="column">
        <div className="media">
          <div className="media-left">
            <figure className="image is-128x128">
              <img src="./images/home/hero-slide1.png" alt="placeholder" />
            </figure>
          </div>
          <div className="media-content">
            <h1 className="title is-6">Netting Myconus Tunic Dreass</h1>
            <p className="subtitle is-6">
              Price: <span>$12</span>
            </p>
          </div>
        </div>
      </div>
      <div className="column">
        <h6 className="title is-6">Status</h6>
        <p className="subtitle is-5 subtext">In - Transit</p>
      </div>
      <div className="column">
        <h6 className="title is-6">Delivery expected by </h6>
        <p className="subtitle is-5">24 december 2016</p>
      </div>
    </Section>
    <MobileSection className="columns has-text-centered is-hidden-tablet">
      <div className="column">
        <div className="media">
          <figure className="image is-128x128">
            <img src="./images/home/hero-slide1.png" alt="placeholder" />
          </figure>
        </div>
      </div>
      <div className="column">
        <h1 className="title is-6">Netting Myconus Tunic Dreass</h1>
        <p className="subtitle is-6">
          Price: <span>$12</span>
        </p>
      </div>
      <div className="column">
        <h6 className="title is-6">Status</h6>
        <p className="subtitle is-5 subtext">In - Transit</p>
      </div>
      <div className="column">
        <h6 className="title is-6">Delivery expected by </h6>
        <p className="subtitle is-5">24 december 2016</p>
      </div>
    </MobileSection>
  </React.Fragment>
);

export default MyOrderItem;
