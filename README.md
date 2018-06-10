# GatsbyJs Ecommerce

A minimalist static E-commerce site built using GatsbyJs.

- Site is still in progress, happy for pull requests and issues if you find any.
- API is still under process, will open source it soon.

[Live Demo](https://www.sejalsuits.co.uk)

## Stack

- [GatsbyJs](https://www.gatsbyjs.org/)
- [React.js](https://reactjs.org/)
- [Apollo GraphQL](https://www.apollographql.com/)

## To use

- Fork or download this repository
- Ready!

To change site config `./src/config/index.js`

also add `.env` file in the root, with content for example:

```
CONTENTFUL_SPACE_ID=YOUR_KEY_HERE
CONTENTFUL_DELIVERY_API_TOKEN=YOUR_KEY_HERE
STRIPE_PUBLISHABLE_KEY=YOUR_KEY_HERE
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
