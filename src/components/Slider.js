import React from 'react';
import CarousalSlider from './CarousalSlider';

const Slider = () => (
  <div className="columns">
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
  </div>
);

export default Slider;
