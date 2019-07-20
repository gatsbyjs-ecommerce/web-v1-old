import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 2rem 1rem;
`;

const Loading = ({ color }) => {
  return (
    <Container>
      <ReactLoading type="spin" color={color || '#363636'} />
    </Container>
  );
};

export default Loading;
