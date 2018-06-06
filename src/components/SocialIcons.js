import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  width: 120px;
  svg {
    color: ${props => (!props.inverted ? '#000' : '#fff')};
    font-size: 1.6rem;
  }
`;

const SocialIcons = ({ inverted }) => (
  <Container className="level" inverted={inverted}>
    <div className="level-item">
      <a href="#">
        <i className="fab fa-facebook-square" />
      </a>
    </div>
    <div className="level-item">
      <a href="#">
        <i className="fab fa-twitter-square" />
      </a>
    </div>
    <div className="level-item">
      <a href="#">
        <i className="fab fa-instagram" />
      </a>
    </div>
    <div className="level-item">
      <a href="#">
        <i className="fab fa-pinterest-square" />
      </a>
    </div>
  </Container>
);

SocialIcons.defaultProps = {
  inverted: false,
};

SocialIcons.propTypes = {
  inverted: PropTypes.bool,
};

export default SocialIcons;
