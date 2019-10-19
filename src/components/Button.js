import React from 'react';
import styled from 'styled-components';

import config from '../config';

const ButtonWrapper = styled.button`
  width: ${props => props.width};
  margin-top: ${props => props.margin};
  margin-left: ${props => props.marginLeft};
  border: 1px solid ${config.themeColor};
  padding: 12px 41px;
  height: 3.5rem;
  background: ${config.themeColor};
  transition: all 0.4s ease;
  color: #fff;
  :hover {
    background: transparent;
    color: #000;
  }
  @media only screen and (max-width: 768px) {
    margin-top: ${props => props.marginTop};
    width: ${props => props.widthMobile};
  }
`;

const Button = ({
  width,
  text,
  margin,
  marginLeft,
  widthMobile,
  marginTop,
}) => (
  <ButtonWrapper
    width={width}
    margin={margin}
    marginLeft={marginLeft}
    widthMobile={widthMobile}
    marginTop={marginTop}
    className="button is-rounded has-text-weight-bold">
    {text}
  </ButtonWrapper>
);

export default Button;
