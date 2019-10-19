import React from 'react';
import TextItem from './TextItem';

const BrandItems = () => {
  return (
    <div className="container">
      <div className="columns is-multiline has-text-centered">
        <TextItem text="HP" />
        <TextItem text="RISO" />
      </div>
    </div>
  );
};

export default BrandItems;
