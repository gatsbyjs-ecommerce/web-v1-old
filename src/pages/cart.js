import React, { useState } from 'react';
import { Spring, animated } from 'react-spring';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import CheckoutProgress from '../components/CheckoutProgress';
import CartItems from '../components/CartItems';
import CheckoutForm from '../components/CheckoutForm';
import PaymentForm from '../components/PaymentForm';
import PaymentConfirmed from '../components/PaymentConfirmed';

const Cart = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [cartData, setCartData] = useState({});
  const [userData, setUserData] = useState({});
  const [paymentData, setPaymentData] = useState({});

  return (
    <Layout>
      <Seo
        title="Cart"
        description="Your order items"
        url={`${config.siteUrl}/cart`}
      />
      <div className="section">
        <div className="container">
          <Heading>Cart</Heading>
          <Spring
            native
            from={{ opacity: 0 }}
            to={{
              opacity: activeStep !== 1 ? 1 : 0,
            }}>
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
              to={{ marginLeft: activeStep === 1 ? '25%' : '0%' }}>
              {stylesProps => (
                <animated.div
                  style={stylesProps}
                  className="column section is-half is-hidden-mobile">
                  <CartItems
                    showCheckoutBtn={activeStep === 1}
                    handlePayment={data => {
                      setActiveStep(2);
                      setCartData(data);
                    }}
                  />
                </animated.div>
              )}
            </Spring>
            <div className="column section is-hidden-tablet">
              <CartItems
                showCheckoutBtn={activeStep === 1}
                handlePayment={data => {
                  setActiveStep(2);
                  setCartData(data);
                }}
              />
            </div>
            <div className="column section">
              {activeStep === 2 && (
                <CheckoutForm
                  handlePayment={data => {
                    setActiveStep(3);
                    setUserData(data);
                  }}
                />
              )}
              {activeStep === 3 && (
                <PaymentForm
                  cartData={cartData}
                  userData={userData}
                  handlePayment={data => {
                    setActiveStep(4);
                    setPaymentData(data);
                  }}
                />
              )}
              {activeStep === 4 && (
                <PaymentConfirmed paymentData={paymentData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
