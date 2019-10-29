import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import ButtonLink from './ButtonLink';

const Wrapper = styled.div`
  background-image: url('/images/home/homebg1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 44rem;
  @media only screen and (max-width: 768px) {
    background-size: contain;
    height: 13rem;
  }
  .column {
    align-self: center;
  }
`;

const Content = styled.div`
  margin: 8% 4% 8% 13%;
  @media only screen and (max-width: 768px) {
    margin: 8% 4% 8% 9%;
  }

  h2 {
    @media only screen and (max-width: 1042px) and (min-width: 769px) {
      margin-top: -0.6rem;
    }
  }

  h1 {
    margin-right: 6rem;
    margin-top: 1rem;
    font-size: 2.5rem;
    @media only screen and (max-width: 768px) {
      font-size: 1.5rem;
      margin-right: 0rem;
      margin-top: 1rem;
    }
    @media only screen and (max-width: 1042px) and (min-width: 769px) {
      margin-top: 0rem;
    }
  }
  p {
    margin-right: 9rem;
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px) {
      margin-right: 0rem;
    }
    @media only screen and (max-width: 1042px) and (min-width: 769px) {
      margin-right: 0rem;
      margin-bottom: 0rem;
    }
  }
`;

class Hero extends React.Component {
  render() {
    const { home } = this.props;

    return (
      <Wrapper className="columns">
        <div className="column">
          <Content>
            <h2 className="is-size-3 is-size-6-mobile has-text-white">
              {home.heroTitle}
            </h2>
            <h1 className="has-text-white has-text-weight-bold is-size-6-mobile is-uppercase">
              {home.heroSubtitle}
            </h1>
            <p className="has-text-weight-semibold has-text-white">
              {home.heroDescription.heroDescription}{' '}
              <Link to="/page/tv-upgrade">
                <span className="has-text-white">Find out how now!</span>
              </Link>
            </p>
            <ButtonLink text="Shop Now" link="/shop" isHidden />
          </Content>
        </div>
      </Wrapper>
    );
  }
}

export default Hero;
