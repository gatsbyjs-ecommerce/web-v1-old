module.exports = {
  DEBUG: process.env.NODE_ENV === 'development',

  siteName: 'GatsbyJs Ecommerce',
  author: 'Parminder Klair',
  description:
    'A ecommerce system using ReactJs, bundled with awesome GatsbyJs.',
  siteUrl: 'http://kickoff-gatsbyjs.netlify.com',
  logo: '/images/logo-1024.png',
  graphQlUri: 'https://api.sejalsuits.co.uk',
  graphQlUriDev: 'http://localhost:4000',

  telephone: '+1-123-123-123',
  email: 'john@doe.com',
  location: 'California, USA',
  twitter: '@NAME-HERE',
  fbUserId: '@NAME-HERE',
  fbAppID: '@NAME-HERE',

  type: 'website',
  googleAnalytics: '',
  backgroundColor: '#e0e0e0',
  themeColor: '#c62828',

  currency: '£',
  stripePublishableKey:
    process.env.NODE_ENV === 'development'
      ? 'pk_test_P0DEB2otulfya51U9lIkLXAn'
      : 'pk_live_eMN5tHGymDNn3DOZH8MX5ziD',
};
