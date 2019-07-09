import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import AsideTitle from './AsideTitle';
import AsideOptions from './AsideOptions';

const asideQuery = graphql`
  query {
    allContentfulSidebarOptions {
      edges {
        node {
          id
          name
          quantity
        }
      }
    }
  }
`;

const AsideMenu = () => (
  <div>
    <AsideTitle title="Select Products" />
    <StaticQuery
      query={asideQuery}
      render={data => {
        const lists = data.allContentfulSidebarOptions.edges;
        return lists.map(item => (
          <AsideOptions name={item.node.name} quantity={item.node.quantity} />
        ));
      }}
    />
  </div>
);

export default AsideMenu;
