<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="./logos/nestjs-logo.svg" width="100" alt="Nest Logo"/></a>
  <a href="https://nodejs.org/en/" target="blank"><img src="./logos/node-logo.webp" width="100" alt="Nodejs logo"/></a>
  <a href="https://graphql.org/" target="blank"><img src="./logos/graphql-logo.png" width="100" alt="GraphQl logo"/></a>
  <a href="https://www.passportjs.org/packages/passport-npm/" target="blank"><img src="./logos/passport-logo.webp" width="100" alt="Passsport logo"/></a>
</p>


[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

GraphQl Authentication: JWT, login, and signup

## Stack

* [@nestjs 9.0.0](https://github.com/nestjs/nest)
  * [Guard](https://docs.nestjs.com/guards)
* [Graphql 15.8.0](https://docs.nestjs.com/graphql/quick-start)
  * Code first
  * Apollo Driver
* [Passport 9.0.0](https://www.passportjs.org/packages/passport-npm/)
  * JWT
  * bcrypt

## GraphQL Sandbox

### Signup - Success

![List](./screenshots/signup-success-sandbox.png)

### Signup - Fail

![List](./screenshots/signup-failed-sandbox.png)

### User login

![List](./screenshots/user-login-sandbox.png)

### GetUsers - Authenticated

![List](./screenshots/getUsers-authenticated-sandbox.png)

### GetUsers - unauthenticated

![List](./screenshots/getUsers-unAuthenticated-sandbox.png)

## Routes

* Apollo Studio: http://localhost:3000/graphql

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Dev

Generate user resources command:

```bash
$ nest g resource users

What transport layer do you use? 
  REST API 
??? GraphQL (code first) 
  GraphQL (schema first) 
  Microservice (non-HTTP) 
  WebSockets 
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
