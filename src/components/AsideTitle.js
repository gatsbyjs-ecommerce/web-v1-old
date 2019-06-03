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

const Title = styled.p`
  background-color: #384aeb;
  width: 100%;
  height: 3.5rem;
  font-size: 1rem;
  font-weight: 900;
  padding: 1rem;
`;

const AsideTitle = ({ title, label }) => (
  <Container className="menu">
    <Title className="menu-label has-text-white">{title}</Title>
  </Container>
);

export default AsideTitle;
