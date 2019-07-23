import React from 'react';
import styled from 'styled-components';
import AsideTitle from './AsideTitle';
import AsideOptions from './AsideOptions';

const Brand = styled.div`
  margin-top: 2rem;
`;

const AsideMenu = () => (
  <React.Fragment>
    <div>
      <AsideTitle title="Products Type" />
      <AsideOptions name="All" />
      <AsideOptions name="LED TV" />
      <AsideOptions name="TV Accessories" />
    </div>
    <Brand>
      <AsideTitle title="Brand" />
      <AsideOptions name="All" />
      <AsideOptions name="Samsung" />
      <AsideOptions name="Sony" />
      <AsideOptions name="LG" />
    </Brand>
  </React.Fragment>
);

export default AsideMenu;
