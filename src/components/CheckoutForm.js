/* global $, SmoothScroll, global */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring';
import { isUndefined } from 'underscore';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import config from '../config';

const BuyBtn = styled.button`
  width: 100%;
  margin-top: 3rem;
  border: 1px solid ${config.themeColor};
  background: ${config.themeColor};
  transition: all 0.4s ease;
  color: #fff;
  :hover {
    border: 2px solid ${config.themeColor};
    background: transparent;
    color: #000;
  }
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
      <React.Fragment>
        <Spring
          native
          from={{ opacity: 0 }}
          to={{ opacity: isVisible ? 1 : 0 }}>
          {stylesProps => (
            <animated.div style={stylesProps}>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Full name</label>
                  <div className="control">
                    <input
                      className="input is-shadowless"
                      name="customerName"
                      value={values.customerName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoFocus
                    />
                    {errors.customerName && touched.customerName && (
                      <p className="help is-danger">{errors.customerName}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Address 1</label>
                  <div className="control">
                    <input
                      className="input is-shadowless"
                      name="customerAddress1"
                      value={values.customerAddress1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.customerAddress1 && touched.customerAddress1 && (
                      <p className="help is-danger">
                        {errors.customerAddress1}
                      </p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Address 2</label>
                  <div className="control">
                    <input
                      className="input is-shadowless"
                      name="customerAddress2"
                      value={values.customerAddress2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.customerAddress2 && touched.customerAddress2 && (
                      <p className="help is-danger">
                        {errors.customerAddress2}
                      </p>
                    )}
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <label className="label">City</label>
                      <div className="control">
                        <input
                          className="input is-shadowless"
                          name="customerCity"
                          value={values.customerCity}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.customerCity && touched.customerCity && (
                          <p className="help is-danger">
                            {errors.customerCity}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Postcode</label>
                      <div className="control">
                        <input
                          className="input is-shadowless"
                          name="customerPostcode"
                          value={values.customerPostcode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.customerPostcode &&
                          touched.customerPostcode && (
                            <p className="help is-danger">
                              {errors.customerPostcode}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <label className="label">State</label>
                      <div className="control">
                        <input
                          className="input is-shadowless"
                          name="customerState"
                          value={values.customerState}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.customerState && touched.customerState && (
                          <p className="help is-danger">
                            {errors.customerState}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Country</label>
                      <div className="control">
                        <input
                          className="input is-shadowless"
                          name="customerCountry"
                          value={values.customerCountry}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.customerCountry && touched.customerCountry && (
                          <p className="help is-danger">
                            {errors.customerCountry}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input is-shadowless"
                      name="customerEmail"
                      value={values.customerEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.customerEmail && touched.customerEmail && (
                      <p className="help is-danger">{errors.customerEmail}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Telephone</label>
                  <div className="control">
                    <input
                      className="input is-shadowless"
                      name="customerTelephone"
                      value={values.customerTelephone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.customerTelephone && touched.customerTelephone && (
                      <p className="help is-danger">
                        {errors.customerTelephone}
                      </p>
                    )}
                  </div>
                </div>
                <BuyBtn
                  type="submit"
                  disabled={isSubmitting}
                  className="checkout-form-btn button is-large is-rounded is-uppercase">
                  <span className="icon">
                    <i className="far fa-credit-card" />
                  </span>
                  <span>Make payment</span>
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
  handlePayment: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: () => ({
    customerName: '',
    customerAddress1: '',
    customerAddress2: '',
    customerCity: '',
    customerPostcode: '',
    customerState: '',
    customerCountry: '',
    customerEmail: '',
    customerTelephone: '',
  }),
  validationSchema: Yup.object().shape({
    customerName: Yup.string().required('Full name is required.'),
    customerAddress1: Yup.string().required('Address 1 is required.'),
    customerCity: Yup.string().required('City is required.'),
    customerPostcode: Yup.string().required('Postcode is required.'),
    customerState: Yup.string().required('State is required.'),
    customerCountry: Yup.string().required('Country is required.'),
    customerEmail: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    customerTelephone: Yup.string().required('Telephone is required!'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    // console.log('handle submit', values, props);
    $('.checkout-form-btn').addClass('is-loading');
    setSubmitting(false);
    setTimeout(() => props.handlePayment(values), 350);
  },
  displayName: 'CheckoutForm', // helps with React DevTools
})(CheckoutForm);
