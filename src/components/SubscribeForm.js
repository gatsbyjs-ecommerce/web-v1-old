import React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { graphql } from 'gatsby';
import swal from 'sweetalert';

import apolloClient from '../utils/apolloClient';

const Container = styled.form`
  margin-top: 1rem;
  input {
    background-color: #3e3e3e;
    border: 1px solid #979797;
    border-radius: 0px;
    color: #fff;
  }
`;

const subscribeMutation = graphql`
  mutation subscribe($email: String!) {
    subscribe(email: $email) {
      email
    }
  }
`;

class SubscribeForm extends React.Component {
  render() {
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
      <Container onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <input
              className="input is-shadowless"
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
        <div className="field">
          <div className="control">
            <button
              type="submit"
              disabled={isSubmitting}
              className="button is-light">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    );
  }
}
export default withFormik({
  mapPropsToValues: () => ({
    email: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    // console.log('handle submit', values, props);
    apolloClient
      .mutate({
        mutation: subscribeMutation,
        variables: values,
      })
      .then(() => {
        swal('Subscribed successfully, thank you!');
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
        swal('Subscription failed, please try again.', 'error');
      });
  },
  displayName: 'SubscribeForm', // helps with React DevTools
})(SubscribeForm);
