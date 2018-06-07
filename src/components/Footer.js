import React from 'react';
import PropTypes from 'prop-types';
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

const NavItems = [
  { id: 1, name: 'About us', url: '/page/about' },
  { id: 2, name: 'Contact us', url: '/contact' },
  { id: 3, name: 'Terms and Conditions', url: '/page/terms-conditions' },
  { id: 4, name: 'Privacy Notice', url: '/page/privacy' },
  { id: 5, name: 'Returns Policy', url: '/page/returns' },
  { id: 6, name: 'Delivery Information', url: '/page/delivery-information' },
  { id: 7, name: 'Gift Vouchers', url: '/coupons' },
];

const Footer = ({ home }) => (
  <Container>
    <div className="section container is-hidden-mobile">
      <div className="columns is-multiline">
        <div className="column has-text-white">
          <Heading className="is-uppercase is-size-5">Customer service</Heading>
          <ul>
            {NavItems.map(item => (
              <li key={item.id}>
                <Link to={item.url} className="has-text-white">
                  {item.name}
                </Link>
              </li>
            ))}
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
          <SocialIcons data={home} inverted />
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

Footer.defaultProps = {
  home: {},
};

Footer.propTypes = {
  home: PropTypes.object,
};

export default Footer;
