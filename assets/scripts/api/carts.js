'use strict';

const app = require('../config.js');
const store = require('../store');
window.app = app;
app.host = app.apiOrigins.production

const addCart = function(data) {
  return $.ajax({
    url: app.host + '/carts/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const getCarts = function() {
  return $.ajax({
    url: app.host + '/carts/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};


const getOrCreateCart = function(callback) {
  $('.logged-in-element').show();
  return getCarts().then(data => {
    if (data.carts.length > 0) {
      store.cart = data.carts[0];
      callback(store.cart.items)
    } else {
      return addCart().then(data => {
        store.cart = data.cart
        callback(store.cart.items)
      })
    }
  })
}

const deleteCart = function() {
  return $.ajax({
    url: app.host + '/carts/' + store.cart.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
}

const updateCart = function() {
  return $.ajax({
    url: app.host + '/carts/' + store.cart.id,
    method: 'PATCH',
    data: {
      cart: store.cart
    },
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  })
}


const getCart = function(id) {
  return $.ajax({
    method: 'GET',
    url: app.host + '/carts/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};


module.exports = {
  getOrCreateCart,
  getCart,
  getCarts,
  addCart,
  deleteCart,
  updateCart
};
