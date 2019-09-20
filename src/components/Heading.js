import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  h2 {
    color: ${props => props.theme.textColorLite};
  }
  hr {
    color: ${props => props.theme.textColorInverse};
    width: 235px;
    margin: 14px auto;
  }
  
`;

const Heading = ({ children }) => (
  <Container>
    <h2 className="is-size-4 has-text-centered is-uppercase has-text-weight-bold">
      {children}
    </h2>
    <hr />
  </Container>
);

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading;
