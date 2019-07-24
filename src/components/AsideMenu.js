import React from 'react';
import styled from 'styled-components';
import AsideTitle from './AsideTitle';
import AsideOption from './AsideOption';

const Brand = styled.div`
  margin-top: 2rem;
`;

// const categories = [
//   { id: 1, name: 'TV accessories', slug: 'tv-accessories' },
//   { id: 2, name: 'Led TV', slug: 'led-tv' },
// ];

// const brands = [
//   { id: 1, name: 'Samsung', slug: 'samsung' },
//   { id: 2, name: 'Sony', slug: 'sony' },
// ];

const AsideMenu = ({
  brands,
  categories,
  brand,
  category,
  onBrandChange,
  onCategoryChange,
}) => (
  <React.Fragment>
    <div>
      <AsideTitle title="Products Type" />
      <AsideOption
        name="All"
        slug="all"
        isActive={category === 'all'}
        onChange={onCategoryChange}
      />
      {categories.map(item => (
        <AsideOption
          key={item.node.id}
          name={item.node.title}
          slug={item.node.slug}
          isActive={category === item.node.slug}
          onChange={onCategoryChange}
        />
      ))}
    </div>
    <Brand>
      <AsideTitle title="Brand" />
      <AsideOption
        name="All"
        slug="all"
        isActive={brand === 'all'}
        onChange={onBrandChange}
      />
      {brands.map(item => (
        <AsideOption
          key={item.node.id}
          name={item.node.name}
          slug={item.node.slug}
          isActive={brand === item.node.slug}
          onChange={onBrandChange}
        />
      ))}
    </Brand>
  </React.Fragment>
);

export default AsideMenu;
