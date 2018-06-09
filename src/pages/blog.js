import React from 'react';
import graphql from 'graphql';

import Heading from '../components/Heading';
import BlogItem from '../components/BlogItem';
import SEO from '../components/SEO';
import config from '../config/index';

export default ({data}) => {
  const blogs = data.allMediumPost.edges;
  const metaData = {
    title: 'Blog | Sejal Suits',
    description: 'See Our Latest Blog',
  };
  return (
    <div className="section">
      <SEO data={metaData} isPage url={`${config.url}/blog`} />
      <Heading>Our Blog</Heading>
      <div className="columns is-multiline is-gapless">
        <div className="column is-half">
          {blogs.map (blog => <BlogItem data={blog} key={blog.id} />)}
        </div>
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query Blogs {
    allMediumPost (sort: { fields: [createdAt], order: DESC }){
    edges{
      node{
        id
        title
        uniqueSlug
        virtuals {
          subtitle
          totalClapCount
          previewImage {
            imageId
          }
        }
        author {
          name
        }
        createdAt
        updatedAt
      }
    }
  }
  }
`;
