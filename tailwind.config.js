module.exports = {
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
  },
  purge: {
    content: [
      './src/**/*.pug'
    ],
    whitelist: ['html'],
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[A-Za-z0-9-_/]+/g) || []
  },
  separator: '_',
  corePlugins: {
    container: false,
  }
}