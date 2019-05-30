import React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import Yup from 'yup';
import gql from 'graphql-tag';

import apolloClient from '../utils/apolloClient';

import Button from './Button';

const Card = styled.div`
  justify-content: center;
  display: flex;
`;

const Container = styled.div`
  width: 59%;
  height: 22.2rem;
  box-shadow: 0px 2px 2px rgba(10, 10, 10, 0.1),
    8px -6px 12px 1px rgba(10, 10, 10, 0.1);
  font-family: 'Oswald', sans-serif;
  @media only screen and (max-width: 768px) {
    width: 90%;
    height: 26rem;
  }
  h1 {
    margin-top: 2.2rem;
    font-size: 2.2rem;
    color: #000;
    @media only screen and (max-width: 768px) {
      margin-top: 0rem;
    }
  }
  p {
    font-size: 1.19rem;
  }
  .content {
    padding: 3rem 11rem;
    display: flex;
    @media only screen and (max-width: 768px) {
      display: inline;
      padding: 0;
    }
  }
  input {
    height: 3.5rem;
    padding: 0rem 1rem;
    margin-right: 1.5rem;
    @media only screen and (max-width: 768px) {
      padding: 0rem;
      margin-right: 0rem;
    }
  }
`;

const subscribeMutation = gql`
  mutation subscribe($email: String!) {
    subscribe(email: $email) {
      email
    }
  }
`;

class SubscriptionForm extends React.Component {
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
      <Card>
        <Container className="card" onSubmit={handleSubmit}>
          <div className="card-content has-text-centered">
            <div className="media">
              <div className="media-content has-text-centered">
                <h1 className="has-text-weight-bold">
                  GET UPDATE FROM ANYWHERE
                </h1>
                <p>
                  Bearing Void gathering light light his eavening unto dont
                  afraid
                </p>
              </div>
            </div>
            <div className="content">
              {/* <Container onSubmit={handleSubmit}>
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
              className="button is-light"
            >
              Subscribe
            </button>
          </div>
        </div> */}
              <input
                className="input is-rounded"
                name="email"
                // value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email"
              />
              {/* {errors.email && touched.email && (
                <p className="help is-danger">{errors.email}</p>
              )} */}
              <Button
                text="Subscribe Now"
                type="submit"
                disabled={isSubmitting}
                className="button"
              />
            </div>
          </div>
        </Container>
      </Card>
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
    const alertify = require('alertify.js'); // eslint-disable-line

    apolloClient
      .mutate({
        mutation: subscribeMutation,
        variables: values,
      })
      .then(() => {
        alertify.alert('Subscribed successfully, thank you!');
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
        alertify.alert('Subscription failed, please try again.');
      });
  },
  displayName: 'SubscriptionForm', // helps with React DevTools
})(SubscriptionForm);
