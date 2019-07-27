import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 1rem;
  width: 100%;

  select {
    width: 100%;
  }
`;

const Dropdown = () => (
  <Container className="select">
    <select>
      <option>Select Country</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
      <option value="mexico">Mexico</option>
      <option value="uk">UK</option>
    </select>
  </Container>
);

export default Dropdown;
