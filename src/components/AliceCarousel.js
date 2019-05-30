import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import imgFirst from '../../static/images/home-bg-1.jpg';
// import imgSecond from '../../static/images/home-bg-2.jpg';s
import imgThird from '../../static/images/home-bg-3.jpg';

const Gallery = () => {
  const handleOnDragStart = e => e.preventDefault();

  return (
    <AliceCarousel mouseDragEnabled>
      <img
        src={imgFirst}
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
        alt=""
      />
      <img
        src={imgFirst}
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
        alt=""
      />
      <img
        src={imgThird}
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
        alt=""
      />
      <img
        src={imgThird}
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
        alt=""
      />
      <img
        src={imgThird}
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
        alt=""
      />
    </AliceCarousel>
  );
};

export default Gallery;
