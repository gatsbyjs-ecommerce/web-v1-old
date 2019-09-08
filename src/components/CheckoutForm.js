import React from 'react';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring';
import { isUndefined } from 'lodash';
import { withFormik } from 'formik';
import * as Yup from 'yup';

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
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Full name</label>
                  <div className="control">
                    <input
                      className="input is-shadowless"
                      name="fullName"
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoFocus
                    />
                    {errors.fullName && touched.fullName && (
                      <p className="help is-danger">{errors.fullName}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Address Line 1</label>
                  <div className="control">
                    <input
                      className="input is-shadowless"
                      name="addressLine1"
                      value={values.addressLine1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.addressLine1 && touched.addressLine1 && (
                      <p className="help is-danger">{errors.addressLine1}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Address Line 2</label>
                  <div className="control">
                    <input
                      className="input is-shadowless"
                      name="addressLine2"
                      value={values.addressLine2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.addressLine2 && touched.addressLine2 && (
                      <p className="help is-danger">{errors.addressLine2}</p>
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
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.city && touched.city && (
                          <p className="help is-danger">{errors.city}</p>
                        )}
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Postcode</label>
                      <div className="control">
                        <input
                          className="input is-shadowless"
                          name="postcode"
                          value={values.postcode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.postcode && touched.postcode && (
                          <p className="help is-danger">{errors.postcode}</p>
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
                          name="state"
                          value={values.state}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.state && touched.state && (
                          <p className="help is-danger">{errors.state}</p>
                        )}
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Country</label>
                      <div className="control">
                        <input
                          className="input is-shadowless"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.country && touched.country && (
                          <p className="help is-danger">{errors.country}</p>
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
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <p className="help is-danger">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Telephone</label>
                  <div className="control">
                    <input
                      className="input is-shadowless"
                      name="telephone"
                      value={values.telephone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.telephone && touched.telephone && (
                      <p className="help is-danger">{errors.telephone}</p>
                    )}
                  </div>
                </div>
                <BuyBtn
                  type="submit"
                  disabled={isSubmitting}
                  className="checkout-form-btn button is-dark is-large is-radiusless is-uppercase">
                  <span className="icon">
                    <i className="far fa-credit-card" />
                  </span>
                  <span>Make payment</span>
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
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postcode: '',
    state: '',
    country: '',
    email: '',
    telephone: '',
  }),
  validationSchema: Yup.object().shape({
    fullName: Yup.string().required('Full name is required.'),
    addressLine1: Yup.string().required('Address Line 1 is required.'),
    city: Yup.string().required('City is required.'),
    postcode: Yup.string().required('Postcode is required.'),
    state: Yup.string().required('State is required.'),
    country: Yup.string().required('Country is required.'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    telephone: Yup.string().required('Telephone is required!'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    // console.log('handle submit', values, props);
    // $('.checkout-form-btn').addClass('is-loading');
    setSubmitting(false);
    setTimeout(() => props.handlePayment(values), 350);
  },
  displayName: 'CheckoutForm', // helps with React DevTools
})(CheckoutForm);
