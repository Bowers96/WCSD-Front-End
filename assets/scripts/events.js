'use strict';
import store from './store';
window.store = store;
import * as auth from './api/auth';
import {
  getOrCreateCart,
} from './api/carts'

import {
  getCart,
} from './api/carts'

import {
  translateCartToCartView
} from './initializeCart'

import getFormFields from '../../lib/get-form-fields';
$(() => {
  $('#sign-up').on('submit', (e) => {
    e.preventDefault();
    let creds = getFormFields(e.target);
    let {
      credentials
    } = creds;
    if (credentials.password !== credentials.password_confirmation) {
      document.getElementById("sign-up").reset();

      $('.inline-alert').css('color', 'red')
      setTimeout(function() {
        $('.inline-alert').css('color', 'black')
      }, 2000)
      return

    }
    document.getElementById("sign-up").reset();
    auth.signUp(creds).then(() => {
        $('.auth-hide').hide();
        $('.sign-in').show();
      })
      .catch(err => {
        $('.inline-alert').css('color', 'red')
        setTimeout(function() {
          $('.inline-alert').css('color', 'black')
        }, 2000)
      })
  });

  $('#sign-in').on('submit', e => {
    e.preventDefault();
    let creds = getFormFields(e.target);
    document.getElementById("sign-in").reset();
    auth.signIn(creds).then(data => {
        store.user = data.user;
      }).then(() => {
        $('.auth-hide').hide();
        $('.shop').show();
        getOrCreateCart(translateCartToCartView)
      })
      .catch(err => {
        $('.inline-alert').css('color', 'red')
        setTimeout(function() {
          $('.inline-alert').css('color', 'black')
        }, 2000)
      })
  });

  $('.sign-out').on('click', e => {
    window.store.cart = [];
    $('#cart-body-table-body').html('');
    $('.subtotal-span').html('$0');
    e.preventDefault();
    auth.signOut();
    $('.logged-in-element').hide();
  });

});
