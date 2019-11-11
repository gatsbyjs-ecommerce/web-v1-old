import React from 'react';
import styled from 'styled-components';

const Items = styled.p`
  margin-right: 2rem;
`;

const MyOrderItem = () => {
  return (
    <div className="columns">
      <div className="column has-text-centered">
        <p className="is-uppercase has-text-weight-bold">
          order number: op16300
        </p>
        <p>Placed On: Tuesday, 23 July, 2019</p>
        <div className="is-inline-flex">
          <Items>
            ITEM: <span className="has-text-weight-bold">2</span>
          </Items>
          <p>
            TOTAL: <span className="has-text-weight-bold">$150</span>
          </p>
        </div>
        <p>Items will display here</p>
      </div>
    </div>
  );
};

export default MyOrderItem;
