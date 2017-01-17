'use strict';
import store from './store';
window.store = store;
import * as auth from './api/auth';
import getFormFields from '../../lib/get-form-fields';
$(() => {
  $('#sign-up').on('submit', (e) => {
    e.preventDefault();
    let creds = getFormFields(e.target);
    auth.signUp(creds).then(console.log);
  });

  $('#sign-in').on('submit', e => {
    e.preventDefault();
    let creds = getFormFields(e.target);
    auth.signIn(creds).then(data => {
      store.user = data.user;
    });
  });


});
