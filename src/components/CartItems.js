import React from 'react';
import { Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { formatCurrency } from '../utils/helpers';
import config from '../config';

const cartQuery = gql`
  query {
    cart @client {
      __typename
      items
      count
    }
  }
`;

const Item = styled.article`
  min-height: 200px;
  .image {
    height: auto;
  }
  img {
    object-fit: cover;
    width: 128px;
    height: auto;
  }
  .remove {
    color: ${config.primaryColor};
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-left: 1rem;
  }
`;

const BuyBtn = styled.button`
  width: 100%;
  margin-top: 3rem;
`;

class CartItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      total: 0,
    };
  }

  calculateTotal(items) {
    const { total } = this.state;
    let newTotal = 0;
    items.forEach(item => {
      newTotal += item.price;
    });
    if (total !== newTotal) {
      setTimeout(() => this.setState({ total: newTotal, items }), 300);
    }
  }

  handleRemoveItem(client, data, index) {
    const newCart = { ...data.cart };
    const items = JSON.parse(newCart.items);
    items.splice(index, 1);
    newCart.count = items.length - 1;
    newCart.items = JSON.stringify(items);
    return client.writeData({
      data: {
        cart: newCart,
      },
    });
  }

  render() {
    const { total } = this.state;
    const { showCheckoutBtn } = this.props;

    return (
      <Query query={cartQuery}>
        {({ data }) => (
          <ApolloConsumer>
            {client => {
              const items = data.cart ? JSON.parse(data.cart.items) : [];
              if (!items || items.length === 0) {
                return (
                  <p className="has-text-centered	is-size-4">
                    No items in your cart.
                  </p>
                );
              }
              this.calculateTotal(items);

              return (
                <React.Fragment>
                  {items.map((item, index) => (
                    <Item className="media" key={index}>
                      <figure className="media-left">
                        <div className="image is-128x128">
                          <Img
                            sizes={item.image.sizes}
                            alt={item.image.title}
                            title={item.image.title}
                            backgroundColor="#f1f1f1"
                          />
                        </div>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong className="is-size-5">{item.title}</strong>{' '}
                            <small className="has-text-grey-light is-uppercase">
                              {item.productCode}
                            </small>
                            <br />
                            <span className="is-size-5 has-text-weight-bold has-text-grey-dark">
                              {formatCurrency(item.price)}
                            </span>
                            <a
                              className="remove"
                              onClick={() =>
                                this.handleRemoveItem(client, data, index)
                              }
                            >
                              remove
                            </a>
                          </p>
                        </div>
                      </div>
                    </Item>
                  ))}
                  <br />
                  <p className="is-size-4 has-text-dark has-text-centered">
                    Total:{' '}
                    <span className="has-text-weight-bold">
                      {formatCurrency(total)}
                    </span>
                  </p>
                  {showCheckoutBtn && (
                    <BuyBtn
                      className="product-info-btn button is-dark is-large is-radiusless is-uppercase"
                      onClick={() => this.props.handlePayment(this.state)}
                    >
                      Checkout
                    </BuyBtn>
                  )}
                </React.Fragment>
              );
            }}
          </ApolloConsumer>
        )}
      </Query>
    );
  }
}

export default CartItems;
