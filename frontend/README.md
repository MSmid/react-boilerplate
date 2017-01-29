This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# FRONTEND #

## DEVELOPMENT

- Watch and autoreload using _react-scripts (npm scripts)_
- ES6 compilation with _Babel_
- SCSS preprocessing with _node-sass_
- JS bundling, versioning and minification with _Webpack_

### How To Develop

- Run `npm start` to start watch and autoreload. Local node server on `localhost:3000`
- Run `npm run watch-css` to watch css, respectively scss/less files and process them

## DEPLOYMENT

- Webpack bulding tool
- Versioned minified JS bundle `main.hash.js`
- CSS minified in bundled `master.css`

### How To Deploy

- Run `npm run build`
- Production optimalized code is in folder /build
- Optionally run `pushstate-server build` and visit `localhost:9000` for local inspection

## FOLDER STRUCTURE

    public/
    -- assets/     # Place for logos, images and other media static content
    -- css/        # Place for css files, `master.css` is web app main bundled css file. Vendor css also belongs here, minified preferably
    -- fonts/      # FontAwesome, Glyphicons and other non CDN fonts
    -- js/         # Folder for vendor's legacy javascript files
    src/
    -- styles/     # Source of stylesheets
    -- -- sass/
    -- -- less/

## MANAGING CSS

- Meeting point of all stylesheets is `src/style/sass/master.scss`. This file has to import all other stylesheets.
- Every component's stylesheet must be imported into master, but it can be located wherever you want. In component folder or between other sheets.

### Vendor CSS

- Vendor css files are in `/public/css` folder. Preferably minified. Also they have to be linked in `public/index.html` in head element.
- Building process doesn't automate this yet, so you have to link those files manually.

### LESS support

- This kickstarter is preconfigured for `.scss` but if you want `.less` just change paths in `package.json` in scripts:

    "scripts": {
      ...
      "build-css": "node-sass src/styles/less/master.less public/css/master.css",
      "watch-css": "node-sass src/styles/less/master.less public/css/master.css -w",
      ...
    },

- or add new scripts for preprocessing both SCSS and LESS sheets.
