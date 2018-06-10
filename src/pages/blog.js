import React from 'react';
import Helmet from 'react-helmet';

import config from '../config';
import Heading from '../components/Heading';

export default () => (
  <div className="section">
    <Helmet title={`Blog - ${config.siteName}`} />
    <Heading>Our Blog</Heading>
  </div>
);
