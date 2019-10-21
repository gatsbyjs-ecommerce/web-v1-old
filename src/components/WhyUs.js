import React from 'react';
import styled from 'styled-components';

import WhyUsItem from './WhyUsItem';

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    display: inline-grid;
  }
`;

const WhyUs = () => {
  return (
    <section className="section">
      <Container className="container">
        <WhyUsItem
          title="Worldwide Shipping"
          description="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris."
        />
        <WhyUsItem
          title="Special Offers"
          description="
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      iaculis mauris."
        />
        <WhyUsItem
          title="Order Protection"
          description="
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      iaculis mauris."
        />
        <WhyUsItem
          title="Professional Support"
          description="
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      iaculis mauris."
        />
      </Container>
    </section>
  );
};

export default WhyUs;
