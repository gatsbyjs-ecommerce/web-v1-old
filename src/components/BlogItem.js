import React from 'react';
import styled from 'styled-components';
import Truncate from 'react-truncate';
import moment from 'moment';

import config from '../config';

const Title = styled.a`
  max-width: 20rem;
  overflow-wrap: break-word;
  margin-bottom: 0.5rem !important;
  color: #4a4a4a;
  display: block;
`;

const Image = styled.img`
  height: 12rem;
  object-fit: cover;
`;

export default ({ data }) => {
  const url = `${config.mediumPublicationUrl}/${data.uniqueSlug}`;

  return (
    <div className="columns">
      <div className="column">
        <a href={url}>
          <Image
            src={`https://cdn-images-1.medium.com/max/800/${
              data.virtuals.previewImage.imageId
              }`}
          />
        </a>
      </div>
      <div className="column ">
        <div className="content">
          <Title className="is-size-5 has-text-weight-semibold" href={url}>
            {data.title}
          </Title>
          <Truncate lines={3} ellipsis="">
            {data.virtuals.subtitle}
          </Truncate>
          <br />
          <br />
          <time dateTime={data.createdAt}>
            <small>Posted {moment(data.createdAt).fromNow()}</small>
          </time>
        </div>
      </div>
    </div>
  );
};
