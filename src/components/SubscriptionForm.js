import React from 'react'
import styled from 'styled-components'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import gql from 'graphql-tag'

import apolloClient from '../utils/apolloClient'

import Button from './Button'

const Card = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 5rem;
`

const Container = styled.div`
  width: 85%;
  height: 24.2rem;
  box-shadow: 0px 3px 2px rgba(10, 10, 10, 0.1),
    8px 0px 30px 1px rgba(10, 10, 10, 0.1);
  font-family: 'Oswald', sans-serif;
  border-radius: 10px;
  @media only screen and (max-width: 768px) {
    width: 90%;
    height: 26rem;
  }
  h1 {
    margin-top: 2.2rem;
    font-size: 2.2rem;
    color: #000;
    @media only screen and (max-width: 768px) {
      margin-top: 2rem;
    }
  }
  p {
    font-size: 1.19rem;
  }
  .content {
    padding: 5% 20%;
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
`

const subscribeMutation = gql`
  mutation subscribe($email: String!) {
    subscribe(email: $email) {
      email
    }
  }
`

class SubscriptionForm extends React.Component {
  render() {
    const {
      values,
      isSubmitting,
      handleSubmit,
      handleChange,
      handleBlur,
    } = this.props
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
              <input
                className="input is-rounded"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email"
              />
              <Button
                text="Subscribe Now"
                type="submit"
                disabled={isSubmitting}
                className="button"
                widthMobile="100%"
              />
            </div>
          </div>
        </Container>
      </Card>
    )
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
    const alertify = require('alertify.js') // eslint-disable-line

    apolloClient
      .mutate({
        mutation: subscribeMutation,
        variables: values,
      })
      .then(() => {
        alertify.alert('Subscribed successfully, thank you!')
        setSubmitting(false)
      })
      .catch(() => {
        setSubmitting(false)
        alertify.alert('Subscription failed, please try again.')
      })
  },
  displayName: 'SubscriptionForm', // helps with React DevTools
})(SubscriptionForm)
