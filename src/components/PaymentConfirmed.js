/* global SmoothScroll, global */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring';
import { isUndefined } from 'underscore';

import styles from '../utils/styles';
import Heading from '../components/Heading';
import CheckoutProgress from '../components/CheckoutProgress';

const scroll = new SmoothScroll();

const Price = styled.div`
  color: ${styles.primaryColor};
  font-size: 1.5rem;
  margin-top: -2rem;
  span {
    font-size: 1.4rem;
    font-weight: light;
  }
`;

const Result = styled.div`
  text-align: center;
  svg {
    font-size: 3rem;
  }
  .info {
    margin: 3rem 1rem;
  }
`;

const OrderId = styled.span`
  font-weight: 700;
  color: ${styles.primaryColor};
`;

const BuyBtn = styled.button`
  width: 100%;
  margin-top: 3rem;
`;

class PaymentConfirmed extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isVisible: false };
  }

  componentDidMount() {
    const isMobile = !isUndefined(global.window)
      ? global.window.innerWidth < 768
      : false;
    setTimeout(() => {
      this.setState({ isVisible: true });

      scroll.animateScroll(isMobile ? 1100 : 450);
    }, 200);
  }

  render() {
    const { isVisible } = this.state;

    return (
      <React.Fragment>
        <Heading>Phulkari Suit</Heading>
        <Price className="has-text-weight-semibold has-text-centered">
          £55 <span>+ £2 delivery</span>
        </Price>
        <CheckoutProgress activeStep="three" />
        <Spring
          native
          from={{ opacity: 0 }}
          to={{ opacity: isVisible ? 1 : 0 }}
        >
          {stylesProps => (
            <animated.div style={stylesProps}>
              <Result>
                <i className="fas fa-check-circle" />
                <h3 className="is-size-5 is-uppercase	has-text-weight-bold">
                  Payment complete
                </h3>
                <p className="info">
                  Order code is <OrderId>#123123</OrderId>
                  <br />
                  Please check your email<br />
                  for delivery updates.
                </p>
              </Result>
              <BuyBtn className="button is-dark is-large is-radiusless is-uppercase">
                Continue Shopping
              </BuyBtn>
            </animated.div>
          )}
        </Spring>
      </React.Fragment>
    );
  }
}

PaymentConfirmed.propTypes = {};

export default PaymentConfirmed;
