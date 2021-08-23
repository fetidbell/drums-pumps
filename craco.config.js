const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '~assets': path.resolve(__dirname, 'src/assets'),
      '~features': path.resolve(__dirname, 'src/features'),
      '~model': path.resolve(__dirname, 'src/model'),
      '~modules': path.resolve(__dirname, 'src/modules'),
    },
  },
};
