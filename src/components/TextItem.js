import React from 'react';
import styled from 'styled-components';

import config from '../config';

const Container = styled.div`
  background: ${config.backgroundColor};
  margin: 3rem 1rem 0rem 0rem;
`;

const TextItem = ({ text }) => {
  return <Container className="column is-size-2">{text}</Container>;
};

export default TextItem;
