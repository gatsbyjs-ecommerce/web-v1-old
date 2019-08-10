import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import ButtonLink from './ButtonLink';

const Wrapper = styled.div`
  height: 28rem;
  @media only screen and (max-width: 768px) {
    height: 26rem;
  }

  .is-5 {
    background-image: url('/images/home/home1.png');
    background-repeat: no-repeat;
    background-size: cover;
    @media only screen and (max-width: 1042px) and (min-width: 769px) {
      height: 32rem;
    }
  }

  .content {
    background-color: #f1f6f7;
    height: 27.5rem;
    margin-top: 0.3rem;
    @media only screen and (max-width: 1042px) and (min-width: 769px) {
      height: 31.5rem;
    }
  }
`;

const Content = styled.div`
  margin: 4% 4% 0 13%;
  @media only screen and (max-width: 768px) {
    margin: 8% 4% 0 9%;
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
        <div className="column is-5 is-hidden-mobile"></div>
        <div className="column content">
          <Content>
            <h2 className="is-size-3">{home.heroTitle}</h2>
            <h1 className="has-text-dark has-text-weight-bold is-uppercase">
              {home.heroSubtitle}
            </h1>
            <p className="has-text-weight-semibold">
              {home.heroDescription.heroDescription}{' '}
              <Link to="/page/tv-upgrade">Find out how now!</Link>
            </p>
            <ButtonLink text="Shop Now" link="/shop" />
          </Content>
        </div>
      </Wrapper>
    );
  }
}

export default Hero;
