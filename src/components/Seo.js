import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import config from '../config';

const getSchemaOrgJSONLD = ({ isProduct, url, title, image, description }) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: config.siteName,
    },
  ];

  return isProduct
    ? [
        ...schemaOrgJSONLD,
        {
          '@context': 'http://schema.org',
          '@type': 'ListItem',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'Product',
          url,
          name: title,
          alternateName: config.siteName,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': config.siteUrl,
          },
        },
      ]
    : schemaOrgJSONLD;
};

const Seo = ({ title, description, url, image, isProduct }) => {
  const pageTitle = `${title} - ${config.siteName}`;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    url,
    pageTitle,
    image,
    description,
    isProduct,
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
      {isProduct ? <meta property="og:type" content="product" /> : null}
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

Seo.propTypes = {
  title: PropTypes.any.isRequired,
  description: PropTypes.any.isRequired,
  url: PropTypes.string,
  image: PropTypes.string,
  isProduct: PropTypes.bool,
};

Seo.defaultProps = {
  url: config.siteUrl,
  image: `${config.siteUrl}/${config.logo}`,
  isProduct: false,
};

export default Seo;
