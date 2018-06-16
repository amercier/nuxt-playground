nuxt-playground
===============

> *Hello World* app built with <img alt="Nuxt" src="https://nuxtjs.org/favicon.ico" height="16"> [Nuxt], with:
> - **Continuous Integration** with <img alt="Travis CI" src="https://cdn.travis-ci.org/images/favicon-076a22660830dc325cc8ed70e7146a59.png" height="16"> [Travis CI], running:
>   - JavaScript linting with <img alt="ESLint" src="http://eslint.org/img/favicon.512x512.png" height="16"> [ESLint]
>   - Unit testing with <img alt="Jest" src="https://facebook.github.io/jest/img/favicon/favicon.ico" height="16"> [Jest] (including snapshots)
>   - End-to-end testing with <img alt="Ava" src="https://github.com/avajs/ava/raw/master/media/logo.png" height="16"> [Ava]
> - **Continuous Deployment** with <img alt="Heroku" src="https://www.herokucdn.com/favicon.ico" height="16"> [Heroku]

[![Build Status](https://travis-ci.org/amercier/nuxt-playground.svg?branch=master)](https://travis-ci.org/amercier/nuxt-playground)
[![Test Coverage](https://img.shields.io/codecov/c/github/amercier/nuxt-playground/master.svg)](https://codecov.io/github/amercier/nuxt-playground?branch=master)

[▶ Live Demo](https://nuxt-playground.herokuapp.com/)


Prerequisites
-------------

- [Node.js] 8+, with **NPM** 5+


Getting started
---------------

### 1. Install

```
npm install
```

### 2. Start application

```
npm run dev
```

Open http://localhost:3000/

### 3. Run tests

```
npm run test
```

**Note:** this runs `npm run test:unit` (unit tests) and `npm run test:e2e` (end-to-end tests) in parallel, see [package.json] for details.


Deployment
----------

### Heroku

1. Create a new Heroku app
2. Set config vars:
  - `HOST` = `0.0.0.0`
  - `NODE_ENV` = `production`
3. Deploy your app (`git push heroku master` if you are [deploying with Git](https://devcenter.heroku.com/articles/git))

Read [How to deploy with Heroku?](https://nuxtjs.org/faq/heroku-deployment) for more details. (note: `NPM_CONFIG_PRODUCTION` is not required for this app as we use `dependencies` instead of `devDependencies`).

### Others

Please refer to official [Nuxt FAQ]:
- [How to deploy with Now?](https://nuxtjs.org/faq/now-deployment)
- [How to deploy with Dokku?](https://nuxtjs.org/faq/dokku-deployment)
- [How to deploy with Surge?](https://nuxtjs.org/faq/surge-deployment)
- [How to deploy with Github?](https://nuxtjs.org/faq/github-pages)


License
-------

[![License](https://img.shields.io/github/license/amercier/nuxt-playground.svg)](./LICENSE.md)


[Nuxt]: https://nuxtjs.org/
[Nuxt FAQ]: https://nuxtjs.org/faq/
[Travis CI]: https://travis-ci.org/
[ESLint]: https://eslint.org/
[Jest]: https://facebook.github.io/jest/
[Ava]: https://ava.li/
[Heroku]: https://www.heroku.com/
[Node.js]: https://nodejs.org/en/
[package.json]: [./package.json]
