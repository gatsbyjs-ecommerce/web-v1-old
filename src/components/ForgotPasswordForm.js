import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { withFormik } from 'formik';
import gql from 'graphql-tag';

import apolloClient from '../utils/apolloClient';
import Button from './Button';

const forgotPasswordMutation = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email) {
      email
    }
  }
`;

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
  handleSubmit: (values, { setSubmitting }) => {
    // console.log('handle submit', values);
    const alertify = require('alertify.js'); // eslint-disable-line

    apolloClient
      .mutate({
        mutation: forgotPasswordMutation, // connect it to forgotPassword mutation
        variables: values,
      })
      .then(() => {
        alertify.alert('Your password successfully sent to your email.');
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
        alertify.alert('Please check your credentials.');
      });
  },
  displayName: 'ForgotPassword', // helps with React DevTools
})(ForgotPassword);
