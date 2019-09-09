import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import config from '../utils/config';

const getSchemaOrgJSONLD = ({ url, title }) => [
  {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url,
    name: title,
    alternateName: config.siteName,
  },
];

const Seo = ({ title, description, url, image }) => {
  const pageTitle = `${title} - ${config.siteName}`;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    url,
    pageTitle,
    image,
    description,
  });

  return (
    <Helmet>
      {/* General tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.fbAppID} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

Seo.defaultProps = {
  url: config.siteUrl,
  image: `${config.siteUrl}/${config.logo}`,
  description: config.description,
};

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default Seo;
