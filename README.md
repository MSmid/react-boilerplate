# KICKSTARTER WEBAPP BOILERPLATE

**Based on [github.com/cngroupdk/vse-4it445](https://github.com/cngroupdk/vse-4it445)**
**Frotend bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)**

Isomorphic web app kickstarter project.

# FEATURES

## Technology Stack

Frontend:

- ReactJS ES6
- Bootstrap 3, Font Awesome
- lodash
- SCSS support

Backend:

- ExpressJS
- Loopback 3.0

# FRONTEND

## Development

- Watch and autoreload using _react-scripts (npm scripts)_
- ES6 compilation with _Babel_
- SCSS preprocessing with _node-sass_
- JS bundling, versioning and minification with _Webpack_

### How To Develop

- Run `npm start` to start watch and autoreload. Local node server on `localhost:3000`
- Run `npm run watch-css` to watch css, respectively scss/less files and process them

## Deployment

- Webpack bulding tool
- Versioned minified JS bundle `main.hash.js`
- CSS minified in bundled `master.css`

### How To Deploy

- Run `npm run build`
- Production optimalized code is in folder /build
- Optionally run `pushstate-server build` and visit `localhost:9000` for local inspection

##
