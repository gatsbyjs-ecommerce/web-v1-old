import React from 'react';
import styled from 'styled-components';

import Heading from './Heading';

const Container = styled.section`
  position: relative;
`;

const HomeAbout = () => (
  <Container className="section">
    <Heading>Who we are</Heading>
    <p>
      Shop for authentic Punjabi suits online from Sejal Suits and be prepared
      to turn heads and win admiring glances with your unique style statement.
      Sejal Suits specialises in traditional Punjabi suits bringing you the
      finest authentic punjabi designs online. Shop online for the best in
      punjabi fashion.
    </p>
  </Container>
);

export default HomeAbout;
