import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import ButtonLink from './ButtonLink';

// import img from '../../static/images/home/hero.jpeg';
// import Button from './Button';

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

const heroQuery = graphql`
  {
    allContentfulHomePageTopSection {
      edges {
        node {
          subtitle
          title
          description {
            description
          }
        }
      }
    }
  }
`;

const Hero = () => (
  <Wrapper className="columns">
    <div className="column is-5 is-hidden-mobile">
      {/* <ImageWrapper>
        <img src={img} alt="Cart With Things" />
      </ImageWrapper> */}
    </div>
    <StaticQuery
      query={heroQuery}
      render={data => {
        const heroData = data.allContentfulHomePageTopSection.edges[0];
        return (
          <div className="column content">
            <Content>
              <h2 className="is-size-3">{heroData.node.title}</h2>
              <h1 className="has-text-dark has-text-weight-bold is-uppercase">
                {heroData.node.subtitle}
              </h1>
              <p className="has-text-weight-semibold">
                {heroData.node.description.description}
                <a> Find out how now!</a>
              </p>
              <ButtonLink text="Shop Now" link="/shop" />
            </Content>
          </div>
        );
      }}
    />
  </Wrapper>
);

export default Hero;
