import Stripe from 'stripe';
import async from 'async';
import { first } from 'lodash';

import { getEntry, getEntries, createEntry } from '../utils/contentful';

import config from '../utils/config';

export default {
  Query: {
    hello: () => 'Hello world!',
  },
  Mutation: {
    createOrder: async (parent, args) => {
      // get products
      const totalCost = await new Promise(resolve => {
        let total = 0;
        async.each(
          args.productIds,
          async (productId, callback) => {
            const product = await getEntry(productId);
            total += product.discountPrice;
            callback();
          },
          () => {
            resolve(total);
          },
        );
      });

      // process payment with stripe
      const stripe = new Stripe(config.get('stripeKey'));
      try {
        const charge = await stripe.charges.create({
          amount: `${totalCost}00`,
          currency: 'gbp',
          description: `Order by ${args.customerEmail} for SejalSuits`,
          source: args.tokenId,
          receipt_email: args.customerEmail,
        });
        // console.log('charge', charge);
        args.stripeId = charge.id;
        args.status = charge.status;
        args.total = totalCost.toString();
      } catch (error) {
        console.error('payment error', error);
        throw new Error('Payment failed.');
      }

      // add to db
      // send array of products
      if (args.productIds) {
        args.products = args.productIds.map(item => ({
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: item,
          },
        }));
      }

      delete args.tokenId;
      delete args.productIds;
      const order = await createEntry(args, 'order');
      return order;
    },
    validateCoupon: async (parent, args) => {
      const coupons = await getEntries('coupons', { 'fields.code': args.code });
      const coupon = first(coupons);
      if (!coupon) {
        throw new Error('Invalid coupon.');
      }
      return coupon;
    },
  },
};
