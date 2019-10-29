import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import config from '../config';

const ButtonWrapper = styled.div`
  .button {
    width: ${props => props.width};
    margin-top: ${props => props.margin};
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
      margin-top: 1rem;
      width: ${props => props.widthMobile};
    }
  }
`;

const ButtonLink = ({
  width,
  link,
  className,
  secondary,
  isHidden,
  text,
  margin,
  widthMobile,
  ...otherProps
}) => (
  <ButtonWrapper width={width} margin={margin} widthMobile={widthMobile}>
    <Link
      to={`${link}`}
      className={`button ${
        secondary ? '' : 'is-rounded has-text-weight-bold'
      } ${isHidden ? 'is-hidden-mobile' : ''}`}
      {...otherProps}>
      {text}
    </Link>
  </ButtonWrapper>
);

export default ButtonLink;
