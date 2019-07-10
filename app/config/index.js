'use strict'
const devConfig = require('dotenv').config({ path: '.env.local' });
const prodConfig = require('./Production');

// const env = process.env.REACT_APP_ENV;
const env = process.env.NODE_ENV;
console.log('env: ', env);
let config = {};
switch (env) {
  case 'production':
    config = prodConfig.parsed;
    break;
  default:
    config = devConfig.parsed;
}

module.exports = config;