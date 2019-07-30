import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 1rem 2rem;
`;

const Message = ({ children, type }) => {
  let className = 'notification is-info';
  if (type === 'error') {
    className = 'notification is-warning';
  }

  return <Container className={className}>{children}</Container>;
};

export default Message;
