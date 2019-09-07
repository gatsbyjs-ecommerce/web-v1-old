import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';

const ContainerImage = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
`;

const StripMobile = styled.div`
  padding: 0.3rem 0;
  background-color: #100b0b;
  width: 100%;
  opacity: 0.9;
`;

const HomeBanner = ({ data }) => (
  <>
    <ContainerImage className="is-hidden-mobile">
      <img src={config.homeBannerImage} alt="home banner" />
    </ContainerImage>
    <StripMobile className="is-hidden-tablet">
      <p className="is-size-6	is-uppercase has-text-white has-text-centered has-text-weight-semibold">
        {data.homeSliderSubTitle}
      </p>
    </StripMobile>
  </>
);

export default HomeBanner;
