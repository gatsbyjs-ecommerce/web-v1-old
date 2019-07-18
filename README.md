## `ecommerce-api`

> A ecommerce API built with Apollo GraphQL Server

#### Requirements
```bash
- Node >=v10.16.0
- NPM >=v6.9.0
- MongoDB
```

#### Features
```bash
- Apollo Graphql
- User Authorisation (Login, Register, Reset Password, Update User)
- Winston Logger
- Email notifications (powered by Mailgun, Sendgrid or Mandrill)
- ESLint with Prettier using airbnb guidelines
```

### Setup

```bash
  # clone the repository
  λ git clone https://github.com/perminder-klair/kickoff-apollo-server
  # change the current directory
  λ cd kickoff-apollo-server
  # install all dependencies
  λ yarn install
  # run the project
  λ yarn dev
```

### Scripts

- `yarn start` - simply starts the server
- `yarn dev` - starts the server in dev mode with hot-reloading
- `yarn build` - build code using babel
- `yarn lint` - lints all the files in `src/` folder
