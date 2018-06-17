import React from 'react';

import config from '../config/index';
import Seo from '../components/Seo';
import Heading from '../components/Heading';
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

  render() {
    const { activeStep, paymentData, userData } = this.state;

    return (
      <div className="section">
        <Seo
          title="Cart"
          description="Your order items"
          url={`${config.siteUrl}/cart`}
        />
        <Heading>Cart</Heading>
        <div className="columns">
          <div className="column is-two-fifths">
            <CartItems
              handlePayment={data =>
                this.setState({ activeStep: 2, cartData: data })
              }
            />
          </div>
          <div className="column section">
            {activeStep === 2 && (
              <CheckoutForm
                product={{}}
                handlePayment={data =>
                  this.setState({ activeStep: 3, userData: data })
                }
              />
            )}
            {activeStep === 3 && (
              <PaymentForm
                product={{}}
                userData={userData}
                handlePayment={data =>
                  this.setState({ activeStep: 4, paymentData: data })
                }
              />
            )}
            {activeStep === 4 && (
              <PaymentConfirmed product={{}} paymentData={paymentData} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
