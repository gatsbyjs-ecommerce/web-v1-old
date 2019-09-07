import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react';

export default ({ content, className }) => (
  <div className={className}>{content}</div>
);

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} />
);
