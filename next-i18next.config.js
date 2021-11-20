const path = require('path')

module.exports = {
    i18n: {
      locales: ['en', 'de', 'ja'],
      defaultLocale: 'en',
    },
    localePath: path.resolve(__dirname, 'locales'),
};