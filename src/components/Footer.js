import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import SocialIcons from './SocialIcons';

const Container = styled.footer`
  padding-bottom: 80px;
  background-color: #2f2f2f;
  position: relative;
  margin-top: 6rem;
`;

const Heading = styled.p`
  margin-bottom: 1rem;
`;

const SubscribeForm = styled.form`
  margin-top: 1rem;
  input {
    background-color: #3e3e3e;
    border: 1px solid #979797;
    border-radius: 0px;
    color: #fff;
  }
`;

const Bottom = styled.div`
  height: 70px;
  background-color: #000000;
  width: 100%;
  position: absolute;
  bottom: 0;
  > .section {
    padding: 1.4rem 1.5rem;
  }
`;

const Footer = () => (
  <Container>
    <div className="section container is-hidden-mobile">
      <div className="columns is-multiline">
        <div className="column has-text-white">
          <Heading className="is-uppercase is-size-5">Customer service</Heading>
          <ul>
            <li>
              <Link to="/" className="has-text-white">
                About us
              </Link>
            </li>
            <li>
              <Link to="/" className="has-text-white">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/" className="has-text-white">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/" className="has-text-white">
                Privacy Notice
              </Link>
            </li>
            <li>
              <Link to="/" className="has-text-white">
                Returns Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="has-text-white">
                Delivery Information
              </Link>
            </li>
            <li>
              <Link to="/" className="has-text-white">
                Gift Vouchers
              </Link>
            </li>
            <li>
              <Link to="/" className="has-text-white">
                Customer Service Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div className="column has-text-white">
          <Heading className="is-uppercase is-size-5">Subscribe</Heading>
          <p>Receive special offers when you signup our mailing list</p>
          <SubscribeForm>
            <input className="input" type="text" placeholder="Text input" />
          </SubscribeForm>
        </div>
        <div className="column has-text-white">
          <Heading className="is-uppercase is-size-5">Connect</Heading>
          <SocialIcons inverted />
        </div>
      </div>
    </div>
    <Bottom>
      <div className="section container">
        <div className="columns has-text-white">
          <div className="column">
            <p>Copyright © 2018 - SejalSuits.co.uk</p>
          </div>
          <div className="column has-text-right is-hidden-mobile">
            <img
              src="/images/payment-strip.png"
              style={{ height: '30px' }}
              alt="payments cards"
            />
          </div>
        </div>
      </div>
    </Bottom>
  </Container>
);

export default Footer;
