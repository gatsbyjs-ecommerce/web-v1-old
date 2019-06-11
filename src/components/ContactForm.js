import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Yup from 'yup';
import { withFormik } from 'formik';
import gql from 'graphql-tag';

import apolloClient from '../utils/apolloClient';

const contactMutation = gql`
  mutation contact($name: String!, $email: String!, $message: String!) {
    contact(name: $name, email: $email, message: $message) {
      email
    }
  }
`;

const Submit = styled.button`
  width: 100%;
  margin-top: 2rem;
`;

const ContactForm = props => {
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
        <label className="label has-text-weight-semibold">Your name</label>
        <div className="control">
          <input
            className="input is-shadowless"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name &&
            touched.name && <p className="help is-danger">{errors.name}</p>}
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
          {errors.email &&
            touched.email && (
              <p className="help is-danger is-capitalized">{errors.email}</p>
            )}
        </div>
      </div>
      <div className="field">
        <label className="label has-text-weight-semibold">Message</label>
        <div className="control">
          <textarea
            className="textarea is-shadowless"
            name="message"
            placeholder="Enter your message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message &&
            touched.message && (
              <p className="help is-danger">{errors.message}</p>
            )}
        </div>
      </div>
      <Submit
        type="submit"
        disabled={isSubmitting}
        className="checkout-form-btn button is-dark is-large is-radiusless is-uppercase"
      >
        Submit
      </Submit>
    </form>
  );
};

ContactForm.propTypes = {
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
    message: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Full name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    message: Yup.string().required('Message is required!'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    // console.log('handle submit', values);
    const alertify = require('alertify.js'); // eslint-disable-line

    apolloClient
      .mutate({
        mutation: contactMutation,
        variables: values,
      })
      .then(() => {
        alertify.alert(
          'Thank you contacting us, we will get back to you soon.',
        );
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
        alertify.alert('Contact form failed, please try again.');
      });
  },
  displayName: 'ContactUs', // helps with React DevTools
})(ContactForm);
