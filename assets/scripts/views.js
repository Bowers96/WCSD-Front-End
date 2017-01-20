'use strict';
import {
  updateCart,
  deleteCart,
  getOrCreateCart,

} from './api/carts';
import {
  translateCartToCartView
} from './initializeCart'



$('#up').on('click', function() {
  $('.authentication').show();
  $('.content').hide();
  $('.sign-in').hide();
  $('#content').hide();
  $('.about-wcsd').hide();
  $('.shop').hide();
  $('.signout').hide();
  $('.item-one').hide();
});

$('#in').on('click', function() {
  $('.sign-in').show();
  $('.content').hide();
  $('.authentication').hide();
  $('#content').hide();
  $('.about-wcsd').hide();
  $('.shop').hide();
  $('.signout').hide();
  $('.item-one').hide();
});


$('#man1').on('click', function() {
  $('.shop').hide();
  $('.item-one').show();
  $('.item-one').css('display: block;');
  $('.hat').hide();
  $('.sweater').hide();
  $('.about-wcsd').hide();
  $('.authentication').hide();
  $('.sign-in').hide();
  $('#content').hide();
  $('.about-wcsd').hide();
  $('.signout').hide();
});

$('#cart').on('click', function() {
  $('#content').show();
  $('.shop').hide();
  $('.content').hide();
  $('.authentication').hide();
  $('.sign-in').hide();
  $('.authentication').hide();
  $('.about-wcsd').hide();
  $('.item-one').hide();
  $('.signout').hide();
});


$('#man2').on('click', function() {
  $('.shop').hide();
  $('.hat').show();
  $('.hat').css('display: block;');
  $('.about-wcsd').hide();
  $('.authentication').hide();
  $('.sign-in').hide();
  $('#content').hide();
  $('.signout').hide();

});

$('#man3').on('click', function() {
  $('.shop').hide();
  $('.sweater').show();
  $('.sweater').css('display: block;');
  $('.about-wcsd').hide();
  $('.authentication').hide();
  $('.sign-in').hide();
  $('#content').hide();
  $('.signout').hide();
});

$('.active').on('click', function() {
  $('.shop').hide();
  $('.content').show();
  $('.item-one').hide();
  $('.about-wcsd').hide();
  $('.authentication').hide();
  $('.sign-in').hide();
  $('#content').hide();
  $('.signout').hide();
});

$('#shop').on('click', function() {
  $('#content').hide();
  $('.content').hide();
  $('.shop').show();
  $('.item-one').hide();
  $('.about-wcsd').hide();
  $('.authentication').hide();
  $('.sign-in').hide();
  $('.signout').hide();
});

$('.about').on('click', function() {
  $('.about-wcsd').show();
  $('.content').hide();
  $('.shop').hide();
  $('.item-one').hide();
  $('.hat').hide();
  $('.sweater').hide();
  $('.authentication').hide();
  $('.sign-in').hide();
  $('#content').hide();
  $('.signout').hide();
});

$('#out').on('click', function() {
  $('.signout').show();
  $('.content').hide();
  $('.shop').hide();
  $('.item-one').hide();
  $('.hat').hide();
  $('.sweater').hide();
  $('.authentication').hide();
  $('.sign-in').hide();
  $('#content').hide();
  $('.about-wcsd').hide();
});

$('.button-continue').on('click', function() {
  $('.item-one').hide();
  $('.shop').show();

});

$('.delete').on('click', function() {
  deleteCart().then(() => {
    $('#cart-body-table-body').html('')
    getOrCreateCart(translateCartToCartView)
    $('#content').append('<div class="alert">Your cart has been deleted, a fresh cart has been created for you!</div>')
    setTimeout(function() {
      $('.alert').remove();
    }, 1500)
  })
});

$('#continue-btn').on('click', function() {
  $('.shop').show();
  $('#content').hide();
})


export function translateItemToCartItem(item) {
  if (!item.itemId) {
    return ""
  }
  return `<tr id="${item.itemId}" >

    <td class="cart-qty">1</td>
    <td class="cart-item-type">${item.itemName}</td>
    <td class"cart-item-size">${item.size}</td>
    <td class="cart-remove">
      <form accept-charset="UTF-8"  class="intform" >
        <button class="button remove" id="removed" type="submit">remove</button>
      </form>
    </td>
    <td class="cart-price">
      <span class="cart-price-span">$${item.itemPrice}</span>
    </td>
  </tr>`
}


$('.products').on('submit', function(e) {
  e.preventDefault();
  let itemId = Math.floor(Math.random() * 1000000);
  let itemName = $(e.target).attr('data-item');
  let itemPrice = $(e.target).attr('data-price');
  let size = $(e.target).find('select').val();
  let item = {
    itemName,
    itemPrice,
    size,
    itemId
  };


  window.store.cart.items.push(item);
  updateCart()
    .then(() => {
      $('#cart-body-table-body').append(translateItemToCartItem(item))
      $(`#${item.itemId}`).find('form').on('submit', function(e) {
        e.preventDefault();
        removeFromCart(item.itemId);
        updateCart();
        $(`#${item.itemId}`).remove();
      })

    })
  $('.subtotal-span').html(`$${sumCartPrices()}`)
});


export function removeFromCart(id) {
  window.store.cart.items = window.store.cart.items.filter(e => {
    return e.itemId !== id
  });
  $(`#${id}`).remove();
  $('.subtotal-span').html(`$${sumCartPrices()}`)
  return window.store.cart;
}

export function sumCartPrices() {
  return window.store.cart.items.reduce((p, e) => {
    return parseInt(p) + parseInt(e.itemPrice || '0');
  }, 0)
}
