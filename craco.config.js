module.exports = {
  style: {
    // https://stackoverflow.com/questions/70403417/typeerror-match-loader-options-plugins-is-not-a-function
    // postcss: {   <~~This won't work
    postcssOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
