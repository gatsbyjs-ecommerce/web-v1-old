# GatsbyJs Ecommerce

A minimalist static E-commerce site built using GatsbyJs and Sanity.
It use headless CMS called Contentful, so no need to manage database for APIs hosting.

[![Netlify Status](https://api.netlify.com/api/v1/badges/73b567fe-9c0f-4ba1-b2e9-6d612b4c15b2/deploy-status)](https://app.netlify.com/sites/gatsbyjs-ecommerce/deploys)

[Live Demo](https://gatsbyjs-ecommerce.netlify.com/)

Admin panel can be found in [Admin repository](https://github.com/gatsbyjs-ecommerce/admin)

Required API for mutations can be found in [API repository](https://github.com/gatsbyjs-ecommerce/api)

Schema to setup Contentful's `Content model` can be found here [Schema JSON](https://github.com/perminder-klair/gatsbyjs-ecommerce/tree/api/contentful_fields)

More info about this written here for better understanding [Creating Static E-commerce site with GatsbyJs](https://medium.com/@pinku1/creating-static-e-commerce-site-with-gatsbyjs-a349d7e022a)

## Stack

- [GatsbyJs](https://www.gatsbyjs.org/)
- [React.js](https://reactjs.org/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [Sanity](https://www.sanity.io/)

## To use

- Fork or download this repository
- Ready!

To change site config `./src/utils/config.js`

also add `.env` file in the root, with content for example:

```
SANITY_TOKEN=YOUR_KEY_HERE
```

## Setup

Run:

```
yarn install
```

## Development

To start development server

```
yarn start
```

## Deployment

```
yarn run build
yarn serve
```
