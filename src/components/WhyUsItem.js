import React from 'react';
import styled from 'styled-components';

import config from '../config';

const Wrapper = styled.div`
  margin: 0rem 1rem 0 0;
  :hover {
    box-shadow: 2px 3px 9px rgba(254, 67, 48),
      0px 5px 6px -6px rgba(254, 67, 48);
  }
  :hover span {
    background: ${config.themeColor};
  }
  :hover h1 {
    color: ${config.themeColor};
  }
  span {
    margin-top: 2rem;
    background: #000;
    width: 6rem;
    height: 6rem;
    border-radius: 6rem;
  }
  h1 {
    margin: 2rem 0 0;
  }
`;

const WhyUsItem = ({ title, description }) => {
  return (
    <Wrapper className="card has-text-centered">
      <span className="icon is-size-1 has-text-white">
        <i className="far fa-paper-plane"></i>
      </span>
      <div>
        <h1 className="title is-5">{title}</h1>
      </div>
      <div className="card-content">
        <div className="content">{description}</div>
      </div>
    </Wrapper>
  );
};

export default WhyUsItem;
