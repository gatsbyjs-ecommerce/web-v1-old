import React from 'react';
import { numberFormat } from 'underscore.string';

export const formatCurrency = value => `£${numberFormat(value, 0)}`;

export const log = value => console.log(value);

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);
