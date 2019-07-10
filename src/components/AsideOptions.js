import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
  background-color: #f1f6f7;
  width: 100%;
  @media only screen and (max-width: 768px) {
    background-color: #f1f6f7;
    width: 100%;
  }

  ul {
    padding: 1rem;
    margin-top: -1rem;
  }

  span {
    margin-left: 5px;
  }
`;

const AsideOptions = ({ name, quantity }) => (
  <Container className="menu">
    <ul className="menu-list">
      <li>
        <div className="control">
          <label className="radio">
            <input type="radio" name="answer" />
            <span className="is-uppercase">{name}</span>
            <span>{quantity}</span>
          </label>
        </div>
      </li>
    </ul>
  </Container>
);

export default AsideOptions;
