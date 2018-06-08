import React from 'react';
import styled from 'styled-components';
import Truncate from 'react-truncate';

const Title = styled.p`
    max-width: 20rem;
    overflow-wrap: break-word;
    margin-bottom: 0.5rem !important;
`;

const Image = styled.img`
    height: 12rem;
    object-fit: cover
`;

export default ({data}) => (
  <div className="" key={data.node.id}>
    <div className="columns">
      <div className="column">
        <Image
          src={`https://cdn-images-1.medium.com/max/800/${data.node.virtuals.previewImage.imageId}`}
        />
      </div>
      <div className="column ">
        <div className="content">
          <Title className="is-size-5 has-text-weight-semibold">
            {data.node.title}
          </Title>
          <Truncate
            lines={3}
            ellipsis={
              <span>
                ...
                <a
                  href={`https://medium.com/sejal-suits/${data.node.uniqueSlug}`}
                  target="_blank"
                >
                  Read more
                </a>
              </span>
            }
          >
            {data.node.virtuals.subtitle}
          </Truncate>
          <br />
          <br />
          <time dateTime={data.node.createdAt}>
            {data.node.createdAt}
          </time>
        </div>
      </div>
    </div>

  </div>
);
