import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useApolloClient } from '@apollo/react-hooks';

import { formatCurrency } from '../utils/helpers';
import CouponForm from './CouponForm';

const Item = styled.article`
  min-height: 200px;
  .image {
    height: auto;
  }
  img.cart-item-image {
    object-fit: cover;
    width: 128px;
    height: auto;
  }
  .remove {
    color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-left: 1rem;
  }
`;

const BuyBtn = styled.button`
  width: 100%;
  margin-top: 3rem;
`;

const CartItems = ({ showCheckoutBtn, handlePayment, cartItems }) => {
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState(null);
  const client = useApolloClient();
  // console.log('cartItems', cartItems);

  if (cartItems.length === 0) {
    return <p className="has-text-centered	is-size-4">No items in your cart.</p>;
  }

  const handleRemoveItem = index => {
    cartItems.splice(index, 1);
    client.writeData({ data: { cartItems } });
  };

  const handleApplyDiscount = ({ discountPercentage, code }) => {
    const discountNew = (discountPercentage / 100) * total;
    setDiscount(discountNew);
    setCouponCode(code);
  };

  const calculateTotal = () => {
    let newTotal = 0;
    cartItems.forEach(item => {
      newTotal += item.price;
    });
    if (total !== newTotal) {
      setTimeout(() => {
        setTotal(newTotal);
      }, 300);
    }
  };

  // run everytime cart item updates
  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  return (
    <>
      {cartItems.map((item, index) => (
        <Item className="media" key={index}>
          {item.image && (
            <figure className="media-left">
              <div className="image is-128x128">
                <img
                  src={item.image}
                  className="cart-item-image"
                  alt={item.title}
                />
                {/* <Img
                  sizes={item.image.sizes}
                  alt={item.image.title}
                  title={item.image.title}
                  backgroundColor="#f1f1f1"
                /> */}
              </div>
            </figure>
          )}
          <div className="media-content">
            <div className="content">
              <p>
                <strong className="is-size-5">{item.title}</strong>{' '}
                <small className="has-text-grey-light is-uppercase">
                  {item.sku}
                </small>
                <br />
                <span className="is-size-5 has-text-weight-bold has-text-grey-dark">
                  {formatCurrency(item.price)}
                </span>
                <a className="remove" onClick={() => handleRemoveItem(index)}>
                  remove
                </a>
              </p>
            </div>
          </div>
        </Item>
      ))}
      <hr />
      <div className="columns is-multiline">
        <div className="column is-6 is-offset-6">
          {!showCheckoutBtn && (
            <>
              <CouponForm
                handleSubmit={values => handleApplyDiscount(values)}
              />
              <hr />
            </>
          )}
        </div>
        <div className="column is-6 is-offset-6">
          <p className="is-size-5 has-text-dark has-text-right">
            <small>Shipping:</small>{' '}
            <span className="has-text-weight-bold">{formatCurrency(0)}</span>
          </p>
          {discount > 0 && (
            <p className="is-size-5 has-text-dark has-text-right">
              <small>Discount:</small>{' '}
              <span className="has-text-weight-bold">
                -{formatCurrency(discount)}
              </span>
            </p>
          )}
          <p className="is-size-4 has-text-dark has-text-right">
            <small>Total:</small>{' '}
            <span className="has-text-weight-bold">
              {formatCurrency(total - discount)}
            </span>
          </p>
        </div>
      </div>
      {showCheckoutBtn && (
        <BuyBtn
          className="product-info-btn button is-dark is-large is-radiusless is-uppercase"
          onClick={() => {
            handlePayment({
              items: cartItems,
              total,
              discount,
              couponCode,
            });
          }}>
          Checkout
        </BuyBtn>
      )}
    </>
  );
};

export default CartItems;
