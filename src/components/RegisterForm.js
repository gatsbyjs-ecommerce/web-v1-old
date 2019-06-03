import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Yup from 'yup';
import { withFormik } from 'formik';
import gql from 'graphql-tag';

import apolloClient from '../utils/apolloClient';

const contactMutation = gql`
  mutation register($name: String!, $email:String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      email
    }
  }
`;

const Submit = styled.button`
  width: 100%;
  margin-top: 2rem;
`;

const RegisterForm = props => {
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
          {errors.password &&
            touched.password && <p className="help is-danger">{errors.password}</p>}
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

RegisterForm.propTypes = {
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
    email:'',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Full name is required!'),
    email: Yup.string().email('Email is required!'),
    password: Yup.string().required('Password is required'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    // console.log('handle submit', values);
    const alertify = require('alertify.js'); // eslint-disable-line

    apolloClient
      .mutate({
        mutation: contactMutation, // connect it to register mutation
        variables: values,
      })
      .then(() => {
        alertify.alert(
          'Your are successfully logged in.',
        );
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
        alertify.alert('Please check your credentials.');
      });
  },
  displayName: 'RegisterForm', // helps with React DevTools
})(RegisterForm);
