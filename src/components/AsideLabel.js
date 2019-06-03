import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
  background-color: #f1f6f7;
  width: 100%;
  @media only screen and (max-width: 768px) {
    background-color: #f1f6f7;
    width: 100%;
  }
`;

const Label = styled.p`
  margin-left: 1.3rem;
  margin-bottom: 1rem;
`;

const AsideLabel = ({ label }) => (
  <Container className="menu">
    <Label className="has-text-weight-bold">{label}</Label>
  </Container>
);

export default AsideLabel;
