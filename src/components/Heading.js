import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import config from '../utils/config';

const Line = styled.div`
  height: 3px;
  width: 50px;
  background-color: ${config.primaryColor};
  margin: 0.6rem auto 3rem auto;
`;

const Heading = ({ children }) => (
  <>
    <h4 className="is-size-4 has-text-centered is-uppercase has-text-weight-bold">
      {children}
    </h4>
    <Line />
  </>
);

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading;
