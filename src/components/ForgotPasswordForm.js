import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { withFormik } from 'formik';

import Button from './Button';

const ForgotPassword = props => {
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
      <Button
        type="submit"
        disabled={isSubmitting}
        className="checkout-form-btn button is-fullwidth is-radiusless is-uppercase"
        text="Submit"
        width="100%"
        margin="2rem"
      />
    </form>
  );
};

ForgotPassword.propTypes = {
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
    email: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().required('Email is required!'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleUpdate(values).finally(() => {
      setSubmitting(false);
    });
  },
  displayName: 'ForgotPassword', // helps with React DevTools
})(ForgotPassword);
