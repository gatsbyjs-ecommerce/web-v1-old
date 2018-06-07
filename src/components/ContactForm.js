import React from 'react';
import styled from 'styled-components';

const Submit = styled.button`
  width: 100%;
  margin-top: 2rem;
`;

export default () => (
  <form>
    <div className="field">
      <label className="label has-text-weight-semibold">Name</label>
      <div className="control">
        <input
          className="input is-shadowless"
          type="text"
          placeholder="your name.."
        />
      </div>
    </div>
    <div className="field">
      <label className="label has-text-weight-semibold">Email</label>
      <div className="control">
        <input
          className="input is-shadowless"
          type="email"
          placeholder="your email.."
        />
      </div>
    </div>
    <div className="field">
      <label className="label has-text-weight-semibold">
        Message
      </label>
      <div className="control">
        <textarea className="textarea is-shadowless" placeholder="message..." />
      </div>
    </div>
    <Submit
      type="submit"
      className="checkout-form-btn button is-dark is-large is-radiusless is-uppercase"
    >
      Submit
    </Submit>
  </form>
);
