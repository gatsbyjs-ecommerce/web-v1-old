import Mailchimp from 'mailchimp-api-v3';
import mailer from '../utils/mailer';
import config from '../utils/config';

export default {
  Query: {
    hello: () => 'Hello world!',
  },
  Mutation: {
    subscribe: async (parent, args) => {
      const mailchimp = new Mailchimp(config.get('mailchimp.key'));
      const list = config.get('mailchimp.list');
      await mailchimp.post(`/lists/${list}/members`, {
        email_address: args.email,
        status: 'subscribed',
      });

      return args;
    },
    contact: async (parent, args) => {
      const { name, email, message } = args;

      const mailOptions = {
        to: config.get('adminEmail'),
        from: `${name} <${email}>`,
        subject: `${config.get('siteName')} Contact Form`,
        text: message,
      };

      try {
        await mailer.sendMail(mailOptions);
        return {
          status: 'success',
          message: 'Contact informaton sent successfully',
        };
      } catch (err) {
        return { status: 'error', message: err.message };
      }
    },
  },
};
