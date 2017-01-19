'use strict';
import {
  translateItemToCartItem,
  removeFromCart,
  sumCartPrices
} from './views';
import {
  updateCart
} from './api/carts';
export function translateCartToCartView(items) {

  let itemsHTML = items.reduce((p, e) => {

    return p + translateItemToCartItem(e);
  }, "");
  $('#cart-body-table-body').html(itemsHTML);
  $('.subtotal-span').html(`$${sumCartPrices()}`)
  items.forEach(item => {
    if (item.itemId) {
      $(`#${item.itemId}`).find('form').on('submit', function(e) {
        e.preventDefault();
        removeFromCart(item.itemId);
        updateCart();
      })
    }
  })

}
