import nodemailer from 'nodemailer';
import Email from 'email-templates';
import path from 'path';

import config from './config';

export default nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: config.get('mailer.user'),
    pass: config.get('mailer.password'),
  },
});

export const renderTemplate = (file, locals = {}) => {
  const templatesDir = path.resolve(__dirname, '..', 'templates');
  const template = path.join(templatesDir, file);
  const email = new Email({
    views: {
      options: {
        extension: 'ejs',
      },
    },
  });

  return Promise.all([
    email.render(`${template}/html`, locals),
    email.render(`${template}/subject`, locals),
  ]);
};
