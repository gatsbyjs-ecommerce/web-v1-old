import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { withFormik } from 'formik';

import Button from './Button';

const MyAccountForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label has-text-weight-semibold">Name</label>
        <div className="control">
          <input
            className="input is-shadowless"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && (
            <p className="help is-danger is-capitalized">{errors.name}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label className="label has-text-weight-semibold">Your email</label>
        <div className="control">
          <input
            className="input is-shadowless"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="help is-danger is-capitalized">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label className="label has-text-weight-semibold">Password</label>
        <div className="control">
          <input
            className="input is-shadowless"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className="help is-danger">{errors.password}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label className="label has-text-weight-semibold">
          Confirm Password
        </label>
        <div className="control">
          <input
            className="input is-shadowless"
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="help is-danger">{errors.confirmPassword}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label className="label has-text-weight-semibold">Phone Number</label>
        <div className="control">
          <input
            className="input is-shadowless"
            name="contact"
            value={values.contact}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.contact && touched.contact && (
            <p className="help is-danger">{errors.contact}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label className="label has-text-weight-semibold">Address</label>
        <div className="control">
          <textarea
            className="textarea is-shadowless"
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.address && touched.address && (
            <p className="help is-danger">{errors.address}</p>
          )}
        </div>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="checkout-form-btn button is-fullwidth is-radiusless is-uppercase"
        text="Update"
        width="100%"
        margin="2rem"
      />
    </form>
  );
};

MyAccountForm.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    address: '',
  }),
  validationSchema: Yup.object().shape({
    Name: Yup.string().required('Name is required!'),
    email: Yup.string().required('Email is required!'),
    password: Yup.string()
      .required('Password is required!')
      .min(2, 'Seems a bit short...'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required!')
      .label('Confirm password')
      // eslint-disable-next-line func-names
      .test('passwords-match', 'Passwords not matched!', function(values) {
        return this.parent.password === values;
      }),
    contact: Yup.string().required('Phone Number is required!'),
    address: Yup.string().required('Address is required!'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleUpdate(values).finally(() => {
      setSubmitting(false);
    });
  },

  displayName: 'MyAccountForm', // helps with React DevTools
})(MyAccountForm);
