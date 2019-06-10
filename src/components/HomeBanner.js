import React from 'react';
import styled from 'styled-components';

import config from '../config';

// const Container = styled.section`
//   height: 376px;
//   background-image: url(${config.homeBannerImage});
//   background-size: 100% auto;
//   position: relative;
//   margin-bottom: 2rem;
//   .main-text {
//     letter-spacing: 0.2rem;
//   }
//   .text {
//     top: 1rem;
//     position: absolute;
//   }
// `;

// const Strip = styled.div`
//   height: 40px;
//   background-color: #100b0b;
//   bottom: 0;
//   left: 0;
//   position: absolute;
//   width: 100%;
//   opacity: 0.7;
//   p {
//     margin-top: 5px;
//   }
// `;

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
  <React.Fragment>
    {/* <Container className="section is-hidden-mobile">
      <div className="text">
        <p className="is-size-3	is-uppercase has-text-white has-text-weight-semibold main-text">
          {data.homeSliderTitle}
        </p>
        <p className="has-text-white">Limited time only!</p>
        <p className="is-size-6 has-text-white">Extra 20% off sale!</p>
        <p className="is-size-6 has-text-white has-text-weight-semibold">
          Use code: SALE
        </p>
      </div>
      <Strip>
        <p className="is-size-5	is-uppercase has-text-white has-text-centered has-text-weight-semibold">
          {data.homeSliderSubTitle}
        </p>
      </Strip>
    </Container> */}
    <ContainerImage className="is-hidden-mobile">
      <img src={config.homeBannerImage} alt="home banner" />
    </ContainerImage>
    <StripMobile className="is-hidden-tablet">
      <p className="is-size-6	is-uppercase has-text-white has-text-centered has-text-weight-semibold">
        {data.homeSliderSubTitle}
      </p>
    </StripMobile>
  </React.Fragment>
);

export default HomeBanner;
