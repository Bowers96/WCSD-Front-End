'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const store = require('./store');
const config = require('./config');
const cartStuff = require('./api/carts')
const auth = require('./api/auth')
import {
  translateCartToCartView
} from './initializeCart'

import {
  FromCart,
  sumCartPrices
} from './views'


import './events';
window.host = config.development;

$(() => {
  setAPIOrigin(location, config);
  // auth.signIn({
  //     credentials: {
  //       email: "p@p",
  //       password: "p"
  //     }
  //   }).then(data => store.user = data.user)
  //   .then(() => cartStuff.getOrCreateCart(translateCartToCartView))
})



// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
require('./time');
require('./views');
