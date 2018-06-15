nuxt-playground
===============

> *Hello World* app built with <img alt="Nuxt" src="https://nuxtjs.org/favicon.ico" height="16"> [Nuxt], with:
> - **Continuous Integration** with <img alt="Travis CI" src="https://cdn.travis-ci.org/images/favicon-076a22660830dc325cc8ed70e7146a59.png" height="16"> [Travis CI]
> - **Continuous Deployment** with <img alt="Heroku" src="https://www.herokucdn.com/favicon.ico" height="16"> [Heroku]

[▶ Live Demo](https://nuxt-playground.herokuapp.com/)


Prerequisites
-------------

- [Node.js] 8+, with **NPM** 5+


Installation
------------

```
npm install
```


Start application
-----------------

```
npm run dev
```

Open http://localhost:3000/


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

[ISC](./LICENSE.md)


[Nuxt]: https://nuxtjs.org/
[Nuxt FAQ]: https://nuxtjs.org/faq/
[Travis CI]: https://travis-ci.org/
[Heroku]: https://www.heroku.com/
[Node.js]: https://nodejs.org/en/
