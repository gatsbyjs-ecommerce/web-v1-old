import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
  background-color: ${props => (props.active ? 'red' : '#f1f6f7')};
  width: 100%;

  ul {
    padding: 1rem;
    margin-top: -1rem;
  }

  span {
    margin-left: 5px;
  }
`;

const AsideOption = ({ name, slug, isActive, onChange }) => (
  <Container className="menu" active={isActive} onClick={() => onChange(slug)}>
    <ul className="menu-list">
      <li>
        <div className="control">
          <label className="radio">
            <span className="is-uppercase">{name}</span>
          </label>
        </div>
      </li>
    </ul>
  </Container>
);

export default AsideOption;
