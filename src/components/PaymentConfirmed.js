import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring';
import { isUndefined } from 'lodash';
import { Link } from 'gatsby';

import config from '../utils/config';

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
  color: ${config.primaryColor};
`;

const BuyBtn = styled(Link)`
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

      // const scroll = new SmoothScroll();
      // scroll.animateScroll(isMobile ? 1100 : 450);
    }, 200);
  }

  render() {
    const { isVisible } = this.state;
    const { orderData } = this.props;

    return (
      <>
        <Spring
          native
          from={{ opacity: 0 }}
          to={{ opacity: isVisible ? 1 : 0 }}>
          {stylesProps => (
            <animated.div style={stylesProps}>
              <Result>
                <i className="fas fa-check-circle" />
                <h3 className="is-size-5 is-uppercase	has-text-weight-bold">
                  Payment complete
                </h3>
                <p className="info">
                  Order code is <OrderId>#{orderData.orderId}</OrderId>
                  <br />
                  Please check your email
                  <br />
                  for delivery updates.
                </p>
              </Result>
              <BuyBtn
                to="/"
                className="button is-dark is-large is-radiusless is-uppercase">
                Continue Shopping
              </BuyBtn>
            </animated.div>
          )}
        </Spring>
      </>
    );
  }
}

PaymentConfirmed.propTypes = {
  orderData: PropTypes.object.isRequired,
};

export default PaymentConfirmed;
