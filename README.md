# Adam Gerbens' User Page
This is my personal site, viewable at http://adamgerbens.com.

It is hosted with [GitHub Pages](https://pages.github.com/), which only serves user pages from the `master` branch. 

Because of this, the `master` branch contains the built site. The source lives on any other branch. 

Built with [Gatsby.js](https://www.gatsbyjs.org/)

### Develop
Make sure that you have the Gatsby CLI program installed:
```sh
npm i -g gatsby-cli
```

Then to run the site locally at http://localhost:8000, run:
```sh
npm i && npm run develop
```

### Build & Deploy
There is a `deploy` script that builds the site for production and commits the changes to the `master` branch:
```sh
npm run deploy
```
