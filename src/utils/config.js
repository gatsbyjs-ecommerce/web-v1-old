module.exports = {
  debug: process.env.NODE_ENV === 'development',

  siteName: 'GatsbyJs Ecommerce',
  author: 'Parminder Klair',
  description:
    'A ecommerce system using ReactJs, bundled with awesome GatsbyJs.',
  siteUrl: 'http://kickoff-gatsbyjs.netlify.com',
  logo: '/images/logo-1024.png',
  graphQlUri: 'http://localhost:4000/',
  graphQlUriDev: 'http://localhost:4000/',

  homeBannerImage: '/images/home-bg-3.jpg',
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
