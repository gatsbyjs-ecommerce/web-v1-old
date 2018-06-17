import React from 'react';
import { Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import config from '../config/index';
import { formatCurrency } from '../utils/helpers';
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

    this.state = {
      activeStep: 1,
      userData: null,
      paymentData: null,
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
    const { total, activeStep, paymentData, userData } = this.state;

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
                          <th>{formatCurrency(item.price)}</th>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th />
                        <th />
                        <th />
                        <th>{formatCurrency(total)}</th>
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
