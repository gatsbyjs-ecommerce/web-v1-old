import path from 'path';
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import {isUndefined} from 'lodash';
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
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: config.title,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: 'Jason Lengstorf',
          },
          publisher: {
            '@type': 'Organization',
            url: 'https://lengstorf.com',
            logo: config.logo,
            name: 'Jason Lengstorf',
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': config.url,
          },
        },
      ]
    : schemaOrgJSONLD;
};

const SEO = ({productData, productImage, isProduct}) => {
  const productMeta = productData.frontmatter || {};

  const title = productMeta.title || config.title;
  const description =
    productMeta.description || productData.excerpt || config.description;
  const image = `${config.url}${productImage}` || config.image;
  const url = productMeta.slug
    ? `${config.url}${path.sep}${productMeta.slug}`
    : config.url;

  // const schemaOrgJSONLD = getSchemaOrgJSONLD ({
  //   isProduct,
  //   url,
  //   title,
  //   image,
  //   description,
  // });

  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      {/* <script type="application/ld+json">
        {JSON.stringify (schemaOrgJSONLD)}
      </script> */}

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
  isProduct: PropTypes.bool,
  productData: PropTypes.shape ({
    frontmatter: PropTypes.any,
    excerpt: PropTypes.any,
  }).isRequired,
  productImage: PropTypes.string,
};

SEO.defaultProps = {
  isProduct: false,
  productImage: null,
};

export default SEO;
