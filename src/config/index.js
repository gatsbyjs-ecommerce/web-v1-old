module.exports = {
  DEBUG: process.env.NODE_ENV === 'development',

  siteName: 'ebox',
  author: 'Parminder Klair',
  description: 'Latest Printing Devices Collection',
  twitter: '@ebox',
  fbUserId: '@ebox',
  fbAppID: '@ebox',
  type: 'website',

  GRAPHQL_ENDPOINT: 'https://smart-home-api.now.sh',
  GRAPHQL_ENDPOINT_DEV: 'https://smart-home-api.now.sh',
  // GRAPHQL_ENDPOINT_DEV: 'http://localhost:4000',
  siteUrl: 'https://www.shdevices.ca',
  // mediumPublicationUrl: 'https://medium.com/ebox',
  googleAnalytics: 'UA-1390187-40',
  stripePublishableKey:
    process.env.NODE_ENV === 'development'
      ? 'pk_test_ReUxZNC00MHaGq2kpGssM4OM00tAbKXaLU'
      : 'pk_live_fo5Q5XUV0G2gFfGPGjW28OLO00c7xoDSfQ',
  deliveryCharges: 2,

  themeColor: '#FE4330',
  primaryColor: '#ed3423',
  secondaryColor: '#2876C4',
  footerColor: '#e5584b',
  textLite: '#f4f4f4',
  backgroundColor: '#e0e0e0',
  logo: '/images/logo.jpeg',
  homeBannerImage: '/images/home-bg-3.jpg',
};
