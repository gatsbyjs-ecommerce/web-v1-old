import React from 'react';
import styled from 'styled-components';
import AsideTitle from './AsideTitle';
import AsideOptions from './AsideOptions';

const Brand = styled.div`
  margin-top: 2rem;
`;

const categories = [
  { id: 1, name: 'TV accessories', slug: 'tv-accessories' },
  { id: 2, name: 'Led TV', slug: 'led-tv' },
];

const brands = [
  { id: 1, name: 'Samsung', slug: 'samsung' },
  { id: 2, name: 'Sony', slug: 'sony' },
];

const AsideMenu = ({ brand, category, onBrandChange, onCategoryChange }) => (
  <React.Fragment>
    <div>
      <AsideTitle title="Products Type" />
      <AsideOptions name="All" isActive={category === 'all'} />
      {categories.map(item => (
        <AsideOptions
          key={item.id}
          name={item.name}
          slug={item.slug}
          isActive={category === item.slug}
          onChange={onCategoryChange}
        />
      ))}
    </div>
    <Brand>
      <AsideTitle title="Brand" />
      <AsideOptions
        name="All"
        isActive={brand === 'all'}
        onChange={() => onBrandChange('all')}
      />
      {brands.map(item => (
        <AsideOptions
          key={item.id}
          name={item.name}
          slug={item.slug}
          isActive={brand === item.slug}
          onChange={onBrandChange}
        />
      ))}
    </Brand>
  </React.Fragment>
);

export default AsideMenu;
