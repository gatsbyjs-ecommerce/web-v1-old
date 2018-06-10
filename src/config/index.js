module.exports = {
  DEBUG: process.env.NODE_ENV === 'development',

  siteName: 'Sejal Suits',
  author: 'Parminder Klair',
  description: 'Latest Punjabi Traditional Suits',
  twitter: '@sejalsuits',
  fbUserId: '@sejalsuits',
  fbAppID: '@sejalsuits',
  type: 'website',

  GRAPHQL_ENDPOINT: 'https://api.sejalsuits.co.uk',
  GRAPHQL_ENDPOINT_DEV: 'http://localhost:4000',
  siteUrl: 'https://www.sejalsuits.co.uk',
  mediumPublicationUrl: 'https://medium.com/sejal-suits',
  googleAnalytics: 'UA-1390187-40',
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  deliveryCharges: 2,

  backgroundColor: '#e0e0e0',
  themeColor: '#c62828',
  primaryColor: '#ef4566',
  secondaryColor: '#2876C4',
  logo: '/images/logo.png',
  homeBannerImage: '/images/home-bg-1.jpg',
};
