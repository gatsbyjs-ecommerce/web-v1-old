import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const ButtonWrapper = styled.div`
  .button {
    width: ${props => props.width};
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

const Button = ({ text, width }) => (
  <ButtonWrapper width={width}>
    <Link to="/" className="button is-rounded has-text-weight-bold">
      {text}
    </Link>
  </ButtonWrapper>
);

export default Button;
