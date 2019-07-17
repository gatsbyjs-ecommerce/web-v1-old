/* eslint consistent-return:0 */

import { createClient as createClientManagement } from 'contentful-management';
import { isObject, isArray } from 'lodash';

import conf from './config';

const config = {
  contenfulSpaceId: conf.get('contentful.spaceId'),
  contentfulManagementAccessToken: conf.get('contentful.managementAccessToken'),
};

const contentfulManagement = createClientManagement({
  accessToken: config.contentfulManagementAccessToken,
});

// Helper functions

const parseAsset = data => {
  const createAssetData = assetData => {
    if (assetData.sys.type !== 'Asset') {
      return undefined;
    }

    return {
      id: assetData.sys.id,
      createdAt: assetData.sys.createdAt,
      file: assetData.fields
        ? assetData.fields.file['en-US'] || assetData.fields.file
        : null,
      title: assetData.fields
        ? assetData.fields.title['en-US'] || assetData.fields.title
        : null,
    };
  };

  if (isArray(data)) {
    const dataNormalized = data.map(item => createAssetData(item));
    return dataNormalized.filter(element => element !== undefined);
  }
  const returnData = createAssetData(data);
  return returnData || null;
};

const parseFields = fields => {
  const data = {};
  Object.keys(fields).map(key => {
    const value = fields[key];
    const valueLang = isObject(value) ? value['en-US'] : value;
    if (isObject(valueLang)) {
      // items link/image
      const assetData = parseAsset(valueLang);
      if (assetData !== null) {
        data[key] = assetData;
      }
    } else {
      data[key] = valueLang;
    }

    return null;
  });
  return data;
};

const parseResponse = (data, parseFieldsFunc = true) =>
  // console.log(JSON.stringify(data));
  data.map(item => {
    const fields = parseFieldsFunc ? parseFields(item.fields) : item.fields;
    return {
      entryId: item.sys.id,
      spaceId: item.sys.space.sys.id,
      contentType: item.sys.contentType.sys.id,
      createdAt: item.sys.createdAt,
      updatedAt: item.sys.updatedAt,
      ...fields,
    };
  });

const parseNewEntry = input => {
  const data = {};
  Object.keys(input).map(key => {
    const value = input[key];
    data[key] = { 'en-US': value };
    return null;
  });
  return data;
};

/**
 * Get array of entries of requested content type
 * @param {*} contentType
 */
export const getEntries = async (contentType, other) => {
  const space = await contentfulManagement.getSpace(config.contenfulSpaceId);
  const entries = await space.getEntries({
    // order: '-sys.createdAt',
    content_type: contentType,
    ...other,
  });
  // console.log('entries', entries);
  return parseResponse(entries.items);
};

/**
 * Get single entry by ID
 */
export const getEntry = async id => {
  const space = await contentfulManagement.getSpace(config.contenfulSpaceId);
  const entry = await space.getEntry(id);
  return { id: entry.sys.id, ...parseFields(entry.fields) };
};

/**
 * Create new entry
 * @param {*} args Object of items
 * @param {*} contentType Entry name
 */
export const createEntry = async (args, contentType) => {
  const space = await contentfulManagement.getSpace(config.contenfulSpaceId);
  const data = parseNewEntry(args);
  const entry = await space.createEntry(contentType, {
    fields: data,
  });

  const fields = parseFields(entry.fields);
  return {
    id: entry.sys.id,
    ...fields,
  };
};
