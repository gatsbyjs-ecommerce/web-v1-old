import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactGA from 'react-ga';

const Container = styled.section`
  width: 120px;
  min-height: 26px;
  .level-item {
    margin-right: 0.3rem;
    a {
      padding: 0 !important;
    }
  }
  svg {
    color: ${props => (!props.inverted ? '#000' : '#fff')};
    font-size: 1.6rem;
  }
`;

const SocialIcons = ({ inverted, data }) => (
  <Container className="level" inverted={inverted}>
    <div className="level-item">
      <ReactGA.OutboundLink
        eventLabel="siteFacebook"
        to={data.facebook}
        target="_blank"
      >
        <i className="fab fa-facebook-square" />
      </ReactGA.OutboundLink>
    </div>
    <div className="level-item">
      <ReactGA.OutboundLink
        eventLabel="siteTwitter"
        to={data.twitter}
        target="_blank"
      >
        <i className="fab fa-twitter-square" />
      </ReactGA.OutboundLink>
    </div>
    <div className="level-item">
      <ReactGA.OutboundLink
        eventLabel="siteInstagram"
        to={data.instagram}
        target="_blank"
      >
        <i className="fab fa-instagram" />
      </ReactGA.OutboundLink>
    </div>
    <div className="level-item">
      <ReactGA.OutboundLink
        eventLabel="sitePinterest"
        to={data.pinterest}
        target="_blank"
      >
        <i className="fab fa-pinterest-square" />
      </ReactGA.OutboundLink>
    </div>
  </Container>
);

SocialIcons.defaultProps = {
  inverted: false,
  data: {},
};

SocialIcons.propTypes = {
  inverted: PropTypes.bool,
  data: PropTypes.object,
};

export default SocialIcons;
