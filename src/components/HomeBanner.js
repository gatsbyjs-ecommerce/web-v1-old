import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';

const Section = styled.section`
  background: url('/images/bgimage.webp') no-repeat center bottom;

  background-size: cover;
  .title {
    color: ${props => props.theme.secondaryColor};
    padding: 1rem 0rem;
    font-size: 52px;
    span {
      color: ${props => props.theme.primaryColor};
    }
  }
  .para {
    font-size: 14px;
  }
  .control {
    margin-top: 2rem;
  }
`;

const HomeBanner = ({ data }) => (
  <Section className="hero is-info is-large">
    <div className="hero-body">
      <div className="container">
        <p className="para has-text-weight-semibold">MEN COLLECTION</p>
        <h1 className="title has-text-weight-bold">
          <span>Show</span> Your <br />
          Personal <span>Style</span>
        </h1>
        <h2 className="subtitle has-text-weight-normal">
          Fowl saw dry which a above together place.
        </h2>
        <p className="control">
          <button type="submit" className="button is-primary is-medium">
            View Collection
          </button>
        </p>
      </div>
    </div>
  </Section>
);

export default HomeBanner;
