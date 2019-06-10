import React from 'react';
import { Spring, animated } from 'react-spring';
import ReactGA from 'react-ga';

import config from '../config/index';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import CheckoutProgress from '../components/CheckoutProgress';
import CartItems from '../components/CartItems';
import CheckoutForm from '../components/CheckoutForm';
import PaymentForm from '../components/PaymentForm';
import PaymentConfirmed from '../components/PaymentConfirmed';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 1,
      cartData: null,
      userData: null,
      paymentData: null,
    };
  }

  componentDidMount() {
    ReactGA.pageview('/cart');
  }

  render() {
    const { activeStep, paymentData, userData, cartData } = this.state;

    return (
      <Layout>
        <div className="section">
          <Seo
            title="Cart"
            description="Your order items"
            url={`${config.siteUrl}/cart`}
          />
          <Heading>Cart</Heading>
          <Spring
            native
            from={{ opacity: 0 }}
            to={{
              opacity: activeStep !== 1 ? 1 : 0,
            }}
          >
            {styles => (
              <animated.div style={styles}>
                <CheckoutProgress activeStep={activeStep} />
              </animated.div>
            )}
          </Spring>
          <div className="columns">
            <Spring
              native
              from={{ marginLeft: '25%' }}
              to={{ marginLeft: activeStep === 1 ? '25%' : '0%' }}
            >
              {stylesProps => (
                <animated.div
                  style={stylesProps}
                  className="column section is-half is-hidden-mobile"
                >
                  <CartItems
                    showCheckoutBtn={activeStep === 1}
                    handlePayment={data =>
                      this.setState({ activeStep: 2, cartData: data })
                    }
                  />
                </animated.div>
              )}
            </Spring>
            <div className="column section is-hidden-tablet">
              <CartItems
                showCheckoutBtn={activeStep === 1}
                handlePayment={data =>
                  this.setState({ activeStep: 2, cartData: data })
                }
              />
            </div>
            <div className="column section">
              {activeStep === 2 && (
                <CheckoutForm
                  handlePayment={data =>
                    this.setState({ activeStep: 3, userData: data })
                  }
                />
              )}
              {activeStep === 3 && (
                <PaymentForm
                  cartData={cartData}
                  userData={userData}
                  handlePayment={data =>
                    this.setState({ activeStep: 4, paymentData: data })
                  }
                />
              )}
              {activeStep === 4 && <PaymentConfirmed paymentData={paymentData} />}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Cart;
