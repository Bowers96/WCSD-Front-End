'use strict';

const app = require('../config.js');
const store = require('../store');
window.app = app;

const addOrder = function(data) {
  return $.ajax({
    url: app.host + '/orders/',
    method: 'POST',
    data,
  });
};

const getOrders = function() {
  return $.ajax({
    url: app.host + '/orders/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const getOrder = function(id) {
  return $.ajax({
    method: 'GET',
    url: app.host + '/order/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

// const changePassword = function(data) {
//   return $.ajax({
//     method: 'PATCH',
//     url: app.host + '/change-password/' + store.user._id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token,
//     },
//     data: data,
//   });
// };

module.exports = {
  getOrder,
  getOrders,
  addOrder,
};
