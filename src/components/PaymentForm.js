import React from 'react';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Cleave from 'cleave.js/react';

const Cards = styled.div`
  margin-bottom: 0rem;
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
    // const isMobile = !isUndefined(global.window)
    //   ? global.window.innerWidth < 768
    //   : false;

    setTimeout(() => {
      this.setState({ isVisible: true });

      // const scroll = new SmoothScroll();
      // scroll.animateScroll(isMobile ? 1100 : 450);
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
    } = this.props;

    return (
      <>
        <Spring
          native
          from={{ opacity: 0 }}
          to={{ opacity: isVisible ? 1 : 0 }}>
          {stylesProps => (
            <animated.div style={stylesProps}>
              <Cards className="has-text-centered">
                <img src="/images/payment-strip.png" alt="payments cards" />
              </Cards>
              <p className="has-text-grey is-size-7	has-text-centered">
                All transactions are secure and encrypted. Credit card
                information is never stored.
              </p>
              <br />
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Card number</label>
                  <div className="control">
                    <Cleave
                      className="input is-shadowless"
                      name="cardNumber"
                      id="card-number"
                      value={values.cardNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      options={{ creditCard: true }}
                    />
                    {errors.cardNumber && touched.cardNumber && (
                      <p className="help is-danger">{errors.cardNumber}</p>
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
                          name="expMonth"
                          value={values.expMonth}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          options={{
                            date: true,
                            datePattern: ['m'],
                          }}
                        />
                        {errors.expMonth && touched.expMonth && (
                          <p className="help is-danger">{errors.expMonth}</p>
                        )}
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Expiry Year</label>
                      <div className="control">
                        <Cleave
                          className="input is-shadowless"
                          name="expYear"
                          value={values.expYear}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          options={{
                            date: true,
                            datePattern: ['Y'],
                          }}
                        />
                        {errors.expYear && touched.expYear && (
                          <p className="help is-danger">{errors.expYear}</p>
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
                    {errors.cvc && touched.cvc && (
                      <p className="help is-danger">{errors.cvc}</p>
                    )}
                  </div>
                </div>
                <BuyBtn
                  className="payment-form-btn button is-dark is-large is-radiusless is-uppercase"
                  onClick={this.handleSubmit}
                  disabled={isSubmitting}>
                  <span className="icon">
                    <i className="fas fa-lock" />
                  </span>
                  <span>Finish and Pay</span>
                </BuyBtn>
              </form>
            </animated.div>
          )}
        </Spring>
      </>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: '',
  }),
  validationSchema: Yup.object().shape({
    cardNumber: Yup.string().required('Card number is required.'),
    expMonth: Yup.string().required('Expiry month is required.'),
    expYear: Yup.string().required('Expiry year is required.'),
    cvc: Yup.string().required('Card CVC is required.'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    console.log('handle submit', values);
    setSubmitting(false);
    // $('.payment-form-btn').addClass('is-loading');

    props.handlePayment(values);
  },
  displayName: 'PaymentForm', // helps with React DevTools
})(PaymentForm);
