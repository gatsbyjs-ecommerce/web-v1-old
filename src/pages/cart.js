import React from 'react';
import { Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import config from '../config/index';
import Seo from '../components/Seo';
import Heading from '../components/Heading';

const cartQuery = gql`
  query {
    cart @client {
      __typename
      items
      count
    }
  }
`;

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = { total: 0 };
  }

  calculateTotal(items) {
    console.log('items', items);
    let total = 0;
    items.forEach(item => {
      total += item.price;
    });
    // this.setState({ total });
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
      <div className="section">
        <Seo
          title="Cart"
          description="Your order items"
          url={`${config.siteUrl}/cart`}
        />
        <Heading>Cart</Heading>
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
                  <table className="table">
                    <thead>
                      <tr>
                        <th />
                        <th>Item code</th>
                        <th>Title</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => (
                        <tr key={item.id}>
                          <th>
                            <a
                              onClick={() =>
                                this.handleRemoveItem(client, data, index)
                              }
                            >
                              x
                            </a>
                          </th>
                          <th>{item.productCode}</th>
                          <th>{item.title}</th>
                          <th>{item.price}</th>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th />
                        <th />
                        <th />
                        <th>{total}</th>
                      </tr>
                    </tfoot>
                  </table>
                );
              }}
            </ApolloConsumer>
          )}
        </Query>
      </div>
    );
  }
}

export default Cart;

// export const cartQuery = graphql``;
