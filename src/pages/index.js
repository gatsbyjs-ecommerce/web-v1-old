import React from 'react';
import Link from 'gatsby-link';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    console.log('data', data);

    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/posts">Blog</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contact">Contact</Link>
      </div>
    );
  }
}

export const indexQuery = graphql`
  query Products {
    allContentfulProduct(filter: { status: { eq: "active" } }) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;
