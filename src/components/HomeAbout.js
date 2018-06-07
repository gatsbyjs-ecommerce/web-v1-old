import React from 'react';
import styled from 'styled-components';

import { HTMLContent } from '../utils/helpers';
import Heading from './Heading';

const Container = styled.section`
  position: relative;
`;

const HomeAbout = ({ data }) => (
  <Container className="section">
    <Heading>Who we are</Heading>
    <HTMLContent
      className="has-text-centered"
      content={data.homeIntro.childMarkdownRemark.html}
    />
  </Container>
);

export default HomeAbout;
