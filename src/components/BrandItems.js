import React from 'react';
import TextItem from './TextItem';

const BrandItems = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline has-text-centered">
          <TextItem text="HP" />
          <TextItem text="RISO" />
        </div>
      </div>
    </section>
  );
};

export default BrandItems;
