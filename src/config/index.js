module.exports = {
  DEBUG: process.env.NODE_ENV === 'development',

  siteName: 'Sejal Suits',
  author: 'Parminder Klair',

  image: '/images/logo.png',
  description: 'Latest Punjabi Traditional Suits',
  twitter: '@sejalsuits',
  fbUserId: '@sejalsuits',
  fbAppId: '@sejalsuits',
  type: 'website',

  GRAPHQL_ENDPOINT: 'https://api.sejalsuits.co.uk/graphql',
  GRAPHQL_ENDPOINT_DEV: 'http://localhost:4000/graphql',
  siteUrl: 'https://www.sejalsuits.co.uk',
  googleAnalytics: 'UA-1390187-40',
  backgroundColor: '#e0e0e0',
  themeColor: '#c62828',
  stripePublishableKey: 'pk_live_eMN5tHGymDNn3DOZH8MX5ziD',
};
