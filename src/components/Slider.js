import React from 'react';
import styled from 'styled-components';

import CarousalSlider from './CarousalSlider';

const Container = styled.div`
  .column {
    justify-content: center;
  }
`;

const Slider = () => (
  <Container className="columns">
    <div className="column is-flex is-hidden-mobile">
      <CarousalSlider />
      <CarousalSlider />
      <CarousalSlider />
    </div>
    <div className="column is-hidden-tablet">
      <CarousalSlider />
      <CarousalSlider />
      <CarousalSlider />
    </div>
  </Container>
);

export default Slider;
