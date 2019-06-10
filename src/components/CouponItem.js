import React from 'react';
import moment from 'moment';
import { StaticQuery, graphql } from "gatsby"

const couponsQuery = graphql`
  query {
    allContentfulCoupons {
      edges {
        node {
          id
          name
          code
          expiryDate
          details {
            details
          }
        }
      }
    }
  }
`;

export default () => (
  <StaticQuery
    query={couponsQuery}
    render={data => {
      const lists = data.allContentfulCoupons.edges;
      // console.log(lists)
      return (
        lists.map(item => (
          <div className="card">
            <header className="card-header">
              <h3 className="card-header-title is-size-5 has-text-centered">
                {item.node.name}
              </h3>
            </header>
            <div className="card-content">
              <div className="content has-text-centered">{item.node.details.details}</div>
            </div>
            <nav className="level card-header" style={{ padding: '1rem 1rem' }}>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading  is-size-7">Coupon Code</p>
                  <p className="title is-size-6 has-text-weight-bold">{item.node.code}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading is-size-7">Exipired Date</p>
                  <p className="title is-size-6">
                    {moment(item.node.expiryDate).format('Do MMM YYYY')}
                  </p>
                </div>
              </div>
            </nav>
          </div>
        )
        )
      )
    }
    }
  />
);
