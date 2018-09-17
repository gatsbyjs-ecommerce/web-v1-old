module.exports = {
  DEBUG: process.env.NODE_ENV === 'development',

  siteName: 'Sejal Suits',
  author: 'Parminder Klair',
  description: 'Latest Punjabi Traditional Suits',
  twitter: '@sejalsuits',
  fbUserId: '@sejalsuits',
  fbAppID: '@sejalsuits',
  type: 'website',

  GRAPHQL_ENDPOINT: 'https://api.sejalsuits.co.ca',
  GRAPHQL_ENDPOINT_DEV: 'http://localhost:4000',
  siteUrl: 'https://www.sejalsuits.co.ca',
  mediumPublicationUrl: 'https://medium.com/sejal-suits',
  googleAnalytics: 'UA-1390187-40',
  stripePublishableKey:
    process.env.NODE_ENV === 'development'
      ? 'pk_test_P0DEB2otulfya51U9lIkLXAn'
      : 'pk_live_eMN5tHGymDNn3DOZH8MX5ziD',
  deliveryCharges: 2,

  backgroundColor: '#e0e0e0',
  themeColor: '#c62828',
  primaryColor: '#ef4566',
  secondaryColor: '#2876C4',
  logo: '/images/logo.png',
  homeBannerImage: '/images/home-bg-3.jpg',
};
