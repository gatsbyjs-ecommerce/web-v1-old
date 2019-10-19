import React from 'react';

import TextItem from './TextItem';

const LocationItems = () => {
  return (
    <div className="container">
      <div className="columns has-text-centered">
        <TextItem text="Jalandhar" />
        <TextItem text="Chandigarh" />
        <TextItem text="Ludhiana" />
        <TextItem text="Others" />
      </div>
    </div>
  );
};

export default LocationItems;
