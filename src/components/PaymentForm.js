/* global $, SmoothScroll, global */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring';
import { isUndefined } from 'underscore';

import styles from '../utils/styles';
import { formatCurrency } from '../utils/helpers';
import Heading from '../components/Heading';
import CheckoutProgress from '../components/CheckoutProgress';

const Price = styled.div`
  color: ${styles.primaryColor};
  font-size: 1.5rem;
  margin-top: -2rem;
  span {
    font-size: 1.4rem;
    font-weight: light;
  }
`;

const Cards = styled.div`
  margin-top: 5rem;
  margin-bottom: -1rem;
  img {
    height: 45px;
  }
`;

const BuyBtn = styled.button`
  width: 100%;
  margin-top: 3rem;
`;

class PaymentForm extends React.Component {
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

      const scroll = new SmoothScroll();
      scroll.animateScroll(isMobile ? 1100 : 450);
    }, 200);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { handlePayment } = this.props;

    $('.payment-form-btn').addClass('is-loading');
    setTimeout(handlePayment, 350);
  };

  render() {
    const { isVisible } = this.state;
    const { product } = this.props;

    return (
      <React.Fragment>
        <Heading>{product.title}</Heading>
        <Price className="has-text-weight-semibold has-text-centered">
          {formatCurrency(product.discountPrice)} <span>+ £2 delivery</span>
        </Price>
        <CheckoutProgress activeStep="two" />
        <Cards className="has-text-centered">
          <img src="/images/payment-strip.png" alt="payments cards" />
        </Cards>
        <Spring
          native
          from={{ opacity: 0 }}
          to={{ opacity: isVisible ? 1 : 0 }}
        >
          {stylesProps => (
            <animated.div style={stylesProps}>
              <form className="section">
                <div className="field">
                  <label className="label">Card number</label>
                  <div className="control">
                    <input
                      className="input is-shadowless"
                      type="text"
                      autoFocus
                    />
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <label className="label">Expiry</label>
                      <div className="control">
                        <input className="input is-shadowless" type="text" />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">CVC</label>
                      <div className="control">
                        <input className="input is-shadowless" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <BuyBtn
                  className="payment-form-btn button is-dark is-large is-radiusless is-uppercase"
                  onClick={this.handleSubmit}
                >
                  <span className="icon">
                    <i className="fas fa-lock" />
                  </span>
                  <span>Finish and Pay</span>
                </BuyBtn>
              </form>
            </animated.div>
          )}
        </Spring>
      </React.Fragment>
    );
  }
}

PaymentForm.propTypes = {
  product: PropTypes.object.isRequired,
  handlePayment: PropTypes.func.isRequired,
};

export default PaymentForm;
