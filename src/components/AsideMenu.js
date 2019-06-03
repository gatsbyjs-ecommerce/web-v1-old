import React from 'react';
import styled from 'styled-components';

import AsideTitle from './AsideTitle';
import AsideOptions from './AsideOptions';
import AsideLabel from './AsideLabel';

const ProductFilter = styled.div`
  margin-top: 2.5rem;
`;

const AsideMenu = () => (
  <React.Fragment>
    <div>
      <AsideTitle title="Browse Categories" />
      <AsideOptions name="Men" number="(3600)" />
      <AsideOptions name="Women" number="(3600)" />
      <AsideOptions name="Accessories" number="(3600)" />
      <AsideOptions name="Footwear" number="(3600)" />
      <AsideOptions name="Bay Item" number="(3600)" />
      <AsideOptions name="Electronics" number="(3600)" />
      <AsideOptions name="Food" number="(3600)" />
    </div>
    <ProductFilter>
      <AsideTitle title="Product Filters" />
      <AsideLabel label="Brands" />
      <AsideOptions name="Apple" number="(29)" />
      <AsideOptions name="Asus" number="(29)" />
      <AsideOptions name="Gionee" number="(19)" />
      <AsideOptions name="Micromax" number="(19)" />
      <AsideOptions name="Samsung" number="(19)" />
      <AsideLabel label="Color" />
      <AsideOptions name="Black" number="(29)" />
      <AsideOptions name="Black Leather" number="(29)" />
      <AsideOptions name="Black and Red" number="(19)" />
      <AsideOptions name="Gold" number="(19)" />
      <AsideOptions name="Space Grey" number="(19)" />
    </ProductFilter>
  </React.Fragment>
);

export default AsideMenu;
