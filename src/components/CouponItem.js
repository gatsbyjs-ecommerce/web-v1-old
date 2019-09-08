import React from 'react';
import dayjs from 'dayjs';

export default ({ data }) => (
  <div className="card">
    <header className="card-header">
      <h3 className="card-header-title is-size-5 has-text-centered">
        {data.title}
      </h3>
    </header>
    <div className="card-content">
      <div className="content has-text-centered">{data.description}</div>
    </div>
    <nav className="level card-header" style={{ padding: '1rem 1rem' }}>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading  is-size-7">Coupon Code</p>
          <p className="title is-size-6 has-text-weight-bold">{data.code}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading is-size-7">Exipired Date</p>
          <p className="title is-size-6">
            {dayjs(data.expiryDate).format('MMMM YYYY')}
          </p>
        </div>
      </div>
    </nav>
  </div>
);
