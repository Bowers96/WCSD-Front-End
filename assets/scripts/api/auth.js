'use strict';

// const app = require('../config.js');
const app = require('../config.js');
const store = require('../store');
window.app = app;
app.host = app.apiOrigins.production


const signUp = function(data) {
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data,
  });
};

const signIn = function(data) {
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data,
  });
};

const signOut = function() {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + store.user._id,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const changePassword = function(data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + store.user._id,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: data,
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
