module.exports = {
  plugins: [
    require('postcss-cssnext')(),
    require('postcss-nested')(),
    require('cssnano')({ autoprefixer: false })
  ]
};
