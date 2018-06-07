/* global $, SmoothScroll, global, Stripe */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring';
import { isUndefined } from 'underscore';
import { withFormik } from 'formik';
import Yup from 'yup';
import Cleave from 'cleave.js/react';
import randomstring from 'randomstring';
import gql from 'graphql-tag';
// import alertify from 'alertify.js';

import config from '../config';
import styles from '../utils/styles';
import apolloClient from '../utils/apollo';
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

const crateOrder = gql`
  mutation createOrder(
    $tokenId: String!
    $orderId: String!
    $productId: String!
    $fullName: String!
    $address1: String!
    $address2: String
    $city: String!
    $state: String!
    $postcode: String!
    $country: String!
    $email: String!
    $telephone: String!
  ) {
    createOrder(
      tokenId: $tokenId
      orderId: $orderId
      productId: $productId
      customerName: $fullName
      customerAddress1: $address1
      customerAddress2: $address2
      customerCity: $city
      customerState: $state
      customerPostcode: $postcode
      customerCountry: $country
      customerEmail: $email
      customerTelephone: $telephone
    ) {
      id
      orderId
    }
  }
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

  render() {
    const { isVisible } = this.state;
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleSubmit,
      handleChange,
      handleBlur,
      product,
    } = this.props;

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
              <form className="section" onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Card number</label>
                  <div className="control">
                    <Cleave
                      className="input is-shadowless"
                      name="number"
                      id="card-number"
                      value={values.number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      options={{ creditCard: true }}
                    />
                    {errors.number &&
                      touched.number && (
                        <p className="help is-danger">{errors.number}</p>
                      )}
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <label className="label">Expiry Month</label>
                      <div className="control">
                        <Cleave
                          className="input is-shadowless"
                          name="exp_month"
                          value={values.exp_month}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          options={{
                            date: true,
                            datePattern: ['m'],
                          }}
                        />
                        {errors.exp_month &&
                          touched.exp_month && (
                            <p className="help is-danger">{errors.exp_month}</p>
                          )}
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Expiry Year</label>
                      <div className="control">
                        <Cleave
                          className="input is-shadowless"
                          name="exp_year"
                          value={values.exp_year}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          options={{
                            date: true,
                            datePattern: ['Y'],
                          }}
                        />
                        {errors.exp_year &&
                          touched.exp_year && (
                            <p className="help is-danger">{errors.exp_year}</p>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">CVC</label>
                  <div className="control">
                    <Cleave
                      className="input is-shadowless"
                      name="cvc"
                      value={values.cvc}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={3}
                      options={{
                        numeral: true,
                      }}
                    />
                    {errors.cvc &&
                      touched.cvc && (
                        <p className="help is-danger">{errors.cvc}</p>
                      )}
                  </div>
                </div>
                <BuyBtn
                  className="payment-form-btn button is-dark is-large is-radiusless is-uppercase"
                  onClick={this.handleSubmit}
                  disabled={isSubmitting}
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

PaymentForm.defaultProps = {
  userData: {},
};

PaymentForm.propTypes = {
  product: PropTypes.object.isRequired,
  userData: PropTypes.object,
};

export default withFormik({
  mapPropsToValues: () => ({
    number: '',
    exp_month: '',
    exp_year: '',
    cvc: '',
  }),
  validationSchema: Yup.object().shape({
    number: Yup.string().required('Card number is required.'),
    exp_month: Yup.string().required('Expiry month is required.'),
    exp_year: Yup.string().required('Expiry year is required.'),
    cvc: Yup.string().required('Card CVC is required.'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    // console.log('handle submit', values, props);
    const { userData } = props;
    const user = userData !== null ? userData : {};
    const orderId = randomstring.generate(6).toUpperCase();
    const alertify = require('alertify.js'); // eslint-disable-line

    $('.payment-form-btn').addClass('is-loading');

    // send data to stripe
    Stripe.setPublishableKey(config.stripePublishableKey);
    Stripe.card.createToken(
      {
        number: values.number.replace(/ /g, ''),
        cvc: values.cvc,
        exp_month: values.exp_month,
        exp_year: values.exp_year,
        name: user.fullName,
        address_line1: user.address1,
        address_city: user.city,
        address_state: user.state,
        address_zip: user.postcode,
        address_country: user.country,
      },
      (error, token) => {
        if (error === 200) {
          // send data to server
          // console.log('sending data', token.id, orderId);
          apolloClient
            .mutate({
              mutation: crateOrder,
              variables: {
                tokenId: token.id,
                orderId,
                productId: props.product.id.substr(1),
                ...user,
              },
            })
            .then(result => {
              console.log('order result', result);
              setTimeout(() => props.handlePayment({ orderId }), 250);
            })
            .catch(() => {
              $('.payment-form-btn').removeClass('is-loading');
              setSubmitting(false);
              alertify.alert('Payment failed, please try again.');
            });
        } else {
          alertify.alert('Payment failed, invalid card details.');
          $('.payment-form-btn').removeClass('is-loading');
          setSubmitting(false);
        }
      },
    );
  },
  displayName: 'PaymentForm', // helps with React DevTools
})(PaymentForm);
