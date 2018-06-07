import React from 'react';

export default ({data}) => (
  <div className="card">
    <header className="card-header">
      <p className="card-header-title">
        {data.name}
      </p>
    </header>
    <div className="card-content">
      <div className="content has-text-centered">
        {data.details.details}
      </div>
    </div>
    <nav className="level card-header" style={{padding: '1rem 0rem'}}>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading  is-size-7">Coupon Code</p>
          <p className="title is-size-6">{data.code}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading is-size-7">Exipired Date</p>
          <p className="title is-size-6">33-05-2018</p>
        </div>
      </div>
    </nav>
  </div>
);
