import React from 'react';
import Helmet from 'react-helmet';

import config from '../config';

const NotFoundPage = () => (
  <div>
    <Helmet title={`Not found - ${config.siteName}`} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default NotFoundPage;
