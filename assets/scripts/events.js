'use strict';
import store from './store';
window.store = store;
import * as auth from './api/auth';
import {
  getOrCreateCart,
} from './api/carts'

import {
  translateCartToCartView
} from './initializeCart'

import getFormFields from '../../lib/get-form-fields';
$(() => {
  $('#sign-up').on('submit', (e) => {
    e.preventDefault();
    let creds = getFormFields(e.target);
    document.getElementById("sign-up").reset();
    auth.signUp(creds).then(console.log);

  });

  $('#sign-in').on('submit', e => {
    e.preventDefault();
    let creds = getFormFields(e.target);
    document.getElementById("sign-in").reset();
    auth.signIn(creds).then(data => {
      store.user = data.user;
    }).then(() => getOrCreateCart(translateCartToCartView))
  });

  $('.sign-out').on('click', e => {
    window.store.cart = [];
    $('#cart-body').html('');
    $('.subtotal-span').html('$0');
    e.preventDefault();
    auth.signOut();
  });

});
