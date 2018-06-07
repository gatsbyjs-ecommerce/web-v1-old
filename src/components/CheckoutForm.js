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

const BuyBtn = styled.button`
  width: 100%;
  margin-top: 3rem;
`;

class CheckoutForm extends React.Component {
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

    $('.checkout-form-btn').addClass('is-loading');
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
        <CheckoutProgress activeStep="one" />
        <Spring
          native
          from={{ opacity: 0 }}
          to={{ opacity: isVisible ? 1 : 0 }}
        >
          {stylesProps => (
            <animated.div style={stylesProps}>
              <form className="section" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Full name</label>
                  <div className="control">
                    <input
                      className="input is-shadowless"
                      type="text"
                      autoFocus
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Address 1</label>
                  <div className="control">
                    <input className="input is-shadowless" type="text" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Address 2</label>
                  <div className="control">
                    <input className="input is-shadowless" type="text" />
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <label className="label">City</label>
                      <div className="control">
                        <input className="input is-shadowless" type="text" />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Postcode</label>
                      <div className="control">
                        <input className="input is-shadowless" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <label className="label">State</label>
                      <div className="control">
                        <input className="input is-shadowless" type="text" />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Country</label>
                      <div className="control">
                        <input className="input is-shadowless" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input is-shadowless" type="text" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Telephone</label>
                  <div className="control">
                    <input className="input is-shadowless" type="text" />
                  </div>
                </div>
                <BuyBtn
                  type="submit"
                  className="checkout-form-btn button is-dark is-large is-radiusless is-uppercase"
                >
                  Buy now
                </BuyBtn>
              </form>
            </animated.div>
          )}
        </Spring>
      </React.Fragment>
    );
  }
}

CheckoutForm.propTypes = {
  product: PropTypes.object.isRequired,
  handlePayment: PropTypes.func.isRequired,
};

export default CheckoutForm;
