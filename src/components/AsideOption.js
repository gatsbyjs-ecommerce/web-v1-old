import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
  background-color: ${props => (props.active ? '#B3CED4' : '#f1f6f7')};
  width: 100%;
  height: 3rem;
  ul {
    padding: 1.5rem;
  }
  .control {
    margin-top: -10px;
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
