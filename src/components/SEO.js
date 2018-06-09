import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import config from '../config/index';

const getSchemaOrgJSONLD = ({isProduct, url, title, image, description}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: config.title,
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
          alternateName: config.title,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': config.url,
          },
        },
      ]
    : schemaOrgJSONLD;
};

const SEO = ({data, productImage, isProduct, isPage, url}) => {
  const title = isProduct || isPage ? data.title : config.siteName;
  const description = isProduct || isPage
    ? data.description
    : config.description;
  const image = isProduct ? productImage : `${config.url}${config.logo}`;

  const schemaOrgJSONLD = getSchemaOrgJSONLD ({
    isProduct,
    url,
    title,
    image,
    description,
  });

  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify (schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isProduct ? <meta property="og:type" content="product" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.fbAppID} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

SEO.propTypes = {
  url: PropTypes.string,
  isProduct: PropTypes.bool,
  isPage: PropTypes.bool,
  data: PropTypes.shape ({
    title: PropTypes.any,
    description: PropTypes.any,
  }).isRequired,
  productImage: PropTypes.string,
};

SEO.defaultProps = {
  isProduct: false,
  isPage: false,
  productImage: null,
  url: null,
};

export default SEO;
