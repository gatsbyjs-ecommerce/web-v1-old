module.exports = {
  DEBUG: process.env.NODE_ENV === 'development',

  siteName: 'Smart Home Devices',
  author: 'Parminder Klair',
  description: 'Latest Smart Home Devices Collection',
  twitter: '@smarthomedevices',
  fbUserId: '@smarthomedevices',
  fbAppID: '@smarthomedevices',
  type: 'website',

  GRAPHQL_ENDPOINT: 'https://smart-home-api.now.sh',
  GRAPHQL_ENDPOINT_DEV: 'https://smart-home-api.now.sh',
  // GRAPHQL_ENDPOINT_DEV: 'http://localhost:4000',
  siteUrl: 'https://www.shdevices.ca',
  mediumPublicationUrl: 'https://medium.com/@shdevicesblog',
  googleAnalytics: 'UA-1390187-40',
  stripePublishableKey:
    process.env.NODE_ENV === 'development'
      ? 'pk_test_ReUxZNC00MHaGq2kpGssM4OM00tAbKXaLU'
      : 'pk_live_fo5Q5XUV0G2gFfGPGjW28OLO00c7xoDSfQ',
  deliveryCharges: 2,

  backgroundColor: '#e0e0e0',
  themeColor: '#c62828',
  primaryColor: '#394AEB',
  secondaryColor: '#2876C4',
  logo: '/images/logo.jpeg',
  homeBannerImage: '/images/home-bg-3.jpg',
};
