import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: #424242;
  padding: 8px;
  position: relative;
  z-index: 99;
  text-align: center;

  p {
    color: white;
    opacity: 0.2;
    font-weight: 300;
  }
`;

const Footer = () => (
  <Container>
    <p>Current work-in-progress for an e-commerce dashboard.</p>
  </Container>
);

export default Footer;
