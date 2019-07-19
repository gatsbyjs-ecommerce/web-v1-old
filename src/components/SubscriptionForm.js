import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { withFormik } from 'formik';

import Button from './Button';

const SubscriptionForm = props => {
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
    <form onSubmit={handleSubmit} className="is-flex">
      <div className="field">
        <div className="control">
          <input
            className="input is-rounded"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your email"
          />
          {errors.email && touched.email && (
            <p className="help is-danger">{errors.email}</p>
          )}
        </div>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        text="Register"
        width="100%"
        margin="2rem"
      />
    </form>
  );
};

SubscriptionForm.propTypes = {
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
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleUpdate(values).finally(() => {
      setSubmitting(false);
    });
  },
  displayName: 'SubscriptionForm', // helps with React DevTools
})(SubscriptionForm);
