import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  .button {
    border: 1px solid #384aeb;
    padding: 12px 41px;
    height: 3.5rem;
    background: #384aeb;
    transition: all 0.4s ease;
    color: #fff;
    :hover {
      background: transparent;
      color: #000;
    }
    @media only screen and (max-width: 768px) {
      margin-top: 1rem;
    }
  }
`;

const Button = ({ text }) => (
  <ButtonWrapper>
    <a className="button is-rounded has-text-weight-bold">{text}</a>
  </ButtonWrapper>
);

export default Button;
