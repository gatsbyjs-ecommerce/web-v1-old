import React from 'react';
import { Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { formatCurrency } from '../utils/helpers';

const cartQuery = gql`
  query {
    cart @client {
      __typename
      items
      count
    }
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
      setTimeout(() => this.setState({ total: newTotal }), 300);
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

    return (
      <div>
        <Query query={cartQuery}>
          {({ data }) => (
            <ApolloConsumer>
              {client => {
                const items = data.cart ? JSON.parse(data.cart.items) : [];
                if (!items || items.length === 0) {
                  return <p>No items in your cart.</p>;
                }
                this.calculateTotal(items);

                return (
                  <div>
                    {items.map((item, index) => (
                      <article className="media" key={index}>
                        <figure className="media-left">
                          <div className="image is-64x64">
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
                              <strong>{item.title}</strong>{' '}
                              <small>{item.productCode}</small>
                              <br />
                              {formatCurrency(item.price)}
                            </p>
                          </div>
                        </div>
                        <div className="media-right">
                          <button
                            className="delete"
                            onClick={() =>
                              this.handleRemoveItem(client, data, index)
                            }
                          />
                        </div>
                      </article>
                    ))}
                    <BuyBtn
                      className="product-info-btn button is-dark is-large is-radiusless is-uppercase"
                      onClick={() => this.props.handlePayment(this.state)}
                    >
                      Make payment
                    </BuyBtn>
                  </div>
                );
              }}
            </ApolloConsumer>
          )}
        </Query>
      </div>
    );
  }
}

export default CartItems;
