import convict from 'convict';
import fs from 'fs';
import dotenv from 'dotenv';

// to load .env file
dotenv.config();

const conf = convict({
  siteName: {
    doc: 'Site name.',
    default: 'Smart Home Devices',
    env: 'SITE_NAME',
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 4000,
    env: 'PORT',
  },
  webAppUrl: {
    doc: 'Web app url',
    format: String,
    default: 'http://www.site.com',
    env: 'WEB_APP_URL',
  },
  adminEmail: {
    doc: 'Admin email ',
    format: String,
    default: 'no-reply@site.com',
    env: 'ADMIN_EMAIL',
  },
  jwtSecret: {
    doc: 'JWT secret.',
    format: String,
    default: 'MY_SITE_SECRET',
    env: 'JWTSECRET',
  },
  mailer: {
    user: {
      doc: 'Mailer user.',
      format: String,
      default: '',
    },
    password: {
      doc: 'Mailer password.',
      format: String,
      default: '',
    },
  },
  contentful: {
    spaceId: {
      doc: 'Contentful Space ID.',
      format: String,
      default: '',
      env: 'CONTENTFUL_SPACE_ID',
    },
    managementAccessToken: {
      doc: 'Contentful management access token.',
      format: String,
      default: '',
      env: 'CONTENTFUL_MANAGEMENT_ACCESS_TOKEN',
    },
  },
  mailchimp: {
    key: {
      doc: 'mailchimp key',
      format: String,
      default: '',
      env: 'MAILCHIMP_KEY',
    },
    list: {
      doc: 'mailchimp list',
      format: String,
      default: '',
      env: 'MAILCHIMP_LIST',
    },
  },
  stripeKey: {
    doc: 'Stripe key',
    format: String,
    default: '',
    env: 'STRIPE_KEY',
  },
});

const env = conf.get('env');
try {
  const path = `${__dirname}/${env}.json`;

  console.log('trying to access %s', path);
  fs.accessSync(path, fs.F_OK);

  conf.loadFile(path);
} catch (error) {
  console.log("file doesn't exist, loading defaults");
}

conf.validate({ allowed: 'strict' });

export default conf;
