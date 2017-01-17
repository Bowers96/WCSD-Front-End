'use strict';

$('#up').on('click', function() {
  $('.authentication').show();
  $('.content').hide();
  $('.sign-in').hide();
  $('#content').hide();
  $('.about-wcsd').hide();
  $('.shop').hide();
});

$('#in').on('click', function() {
  $('.sign-in').show();
  $('.content').hide();
  $('.authentication').hide();
  $('#content').hide();
  $('.about-wcsd').hide();
  $('.shop').hide();
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
});

$('#cart').on('click', function() {
  $('#content').show();
  $('.shop').hide();
  $('.content').hide();
  $('.authentication').hide();
  $('.sign-in').hide();
  $('.authentication').hide();
  $('.about-wcsd').hide();
});


$('#man2').on('click', function() {
  $('.shop').hide();
  $('.hat').show();
  $('.hat').css('display: block;');
  $('.about-wcsd').hide();
  $('.authentication').hide();
  $('.sign-in').hide();
  $('#content').hide();

});

$('#man3').on('click', function() {
  $('.shop').hide();
  $('.sweater').show();
  $('.sweater').css('display: block;');
  $('.about-wcsd').hide();
  $('.authentication').hide();
  $('.sign-in').hide();
  $('#content').hide();
});

$('.active').on('click', function() {
  $('.shop').hide();
  $('.content').show();
  $('.item-one').hide();
  $('.about-wcsd').hide();
  $('.authentication').hide();
  $('.sign-in').hide();
  $('#content').hide();
});

$('#shop').on('click', function() {
  $('#content').hide();
  $('.content').hide();
  $('.shop').show();
  $('.item-one').hide();
  $('.about-wcsd').hide();
  $('.authentication').hide();
  $('.sign-in').hide();
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
});


function translateItemToCartItem(item) {
  return `<tr id="${item.itemId}" >

    <td class="cart-qty">1</td>
    <td class="cart-item-type">${item.itemName}</td>
    <td class"cart-item-size">${item.size}</td>
    <td class="cart-remove">
      <form accept-charset="UTF-8"  class="intform" >
        <button class="button remove" type="submit">remove</button>
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


  window.store.cart.push(item);
  $('#cart-body-table-body').append(translateItemToCartItem(item))
  // console.log(sumCartPrices());
  $('.subtotal-span').html(`$${sumCartPrices()}`)
});


function removeFromCart(id) {
  console.log(id)
  window.store.cart = window.store.cart.filter(e => {
    console.log(e)
  })
}

function sumCartPrices() {
  return window.store.cart.reduce((p, e) => {
    return parseInt(p) + parseInt(e.itemPrice);
  }, 0)
}


$('body').on('submit', '.intform', e => {
  e.preventDefault();

  let parent = $(e.target).parent().parent();
  parent.remove();
  removeFromCart(parent.attr('id'));


})
