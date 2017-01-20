webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// user require with a reference to bundle the file and use it in this file
	// var example = require('./example');

	// load manifests
	// scripts

	__webpack_require__(1);

	// styles
	__webpack_require__(16);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _initializeCart = __webpack_require__(3);

	var _views = __webpack_require__(4);

	__webpack_require__(8);

	var setAPIOrigin = __webpack_require__(12);
	var store = __webpack_require__(7);
	var config = __webpack_require__(6);
	var cartStuff = __webpack_require__(5);
	var auth = __webpack_require__(9);

	window.host = config.development;

	$(function () {
	  setAPIOrigin(location, config);
	  // auth.signIn({
	  //     credentials: {
	  //       email: "p@p",
	  //       password: "p"
	  //     }
	  //   }).then(data => store.user = data.user)
	  //   .then(() => cartStuff.getOrCreateCart(translateCartToCartView))
	});

	// use require with a reference to bundle the file and use it in this file
	// const example = require('./example');

	// use require without a reference to ensure a file is bundled
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(4);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.translateCartToCartView = translateCartToCartView;

	var _views = __webpack_require__(4);

	var _carts = __webpack_require__(5);

	function translateCartToCartView(items) {

	  var itemsHTML = items.reduce(function (p, e) {

	    return p + (0, _views.translateItemToCartItem)(e);
	  }, "");
	  $('#cart-body-table-body').html(itemsHTML);
	  $('.subtotal-span').html('$' + (0, _views.sumCartPrices)());
	  items.forEach(function (item) {
	    if (item.itemId) {
	      $('#' + item.itemId).find('form').on('submit', function (e) {
	        e.preventDefault();
	        (0, _views.removeFromCart)(item.itemId);
	        (0, _carts.updateCart)();
	      });
	    }
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.translateItemToCartItem = translateItemToCartItem;
	exports.removeFromCart = removeFromCart;
	exports.sumCartPrices = sumCartPrices;

	var _carts = __webpack_require__(5);

	var _initializeCart = __webpack_require__(3);

	$('#up').on('click', function () {
	  $('.authentication').show();
	  $('.content').hide();
	  $('.sign-in').hide();
	  $('#content').hide();
	  $('.about-wcsd').hide();
	  $('.shop').hide();
	  $('.signout').hide();
	  $('.item-one').hide();
	});

	$('#in').on('click', function () {
	  $('.sign-in').show();
	  $('.content').hide();
	  $('.authentication').hide();
	  $('#content').hide();
	  $('.about-wcsd').hide();
	  $('.shop').hide();
	  $('.signout').hide();
	  $('.item-one').hide();
	});

	$('#man1').on('click', function () {
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

	$('#cart').on('click', function () {
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

	$('#man2').on('click', function () {
	  $('.shop').hide();
	  $('.hat').show();
	  $('.hat').css('display: block;');
	  $('.about-wcsd').hide();
	  $('.authentication').hide();
	  $('.sign-in').hide();
	  $('#content').hide();
	  $('.signout').hide();
	});

	$('#man3').on('click', function () {
	  $('.shop').hide();
	  $('.sweater').show();
	  $('.sweater').css('display: block;');
	  $('.about-wcsd').hide();
	  $('.authentication').hide();
	  $('.sign-in').hide();
	  $('#content').hide();
	  $('.signout').hide();
	});

	$('.active').on('click', function () {
	  $('.shop').hide();
	  $('.content').show();
	  $('.item-one').hide();
	  $('.about-wcsd').hide();
	  $('.authentication').hide();
	  $('.sign-in').hide();
	  $('#content').hide();
	  $('.signout').hide();
	});

	$('#shop').on('click', function () {
	  $('#content').hide();
	  $('.content').hide();
	  $('.shop').show();
	  $('.item-one').hide();
	  $('.about-wcsd').hide();
	  $('.authentication').hide();
	  $('.sign-in').hide();
	  $('.signout').hide();
	});

	$('.about').on('click', function () {
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

	$('#out').on('click', function () {
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

	$('.button-continue').on('click', function () {
	  $('.item-one').hide();
	  $('.shop').show();
	});

	$('.delete').on('click', function () {
	  (0, _carts.deleteCart)().then(function () {
	    $('#cart-body-table-body').html('');
	    (0, _carts.getOrCreateCart)(_initializeCart.translateCartToCartView);
	    $('#content').append('<div class="alert">Your cart has been deleted, a fresh cart has been created for you!</div>');
	    setTimeout(function () {
	      $('.alert').remove();
	    }, 1500);
	  });
	});

	$('#continue-btn').on('click', function () {
	  $('.shop').show();
	  $('#content').hide();
	});

	function translateItemToCartItem(item) {
	  if (!item.itemId) {
	    return "";
	  }
	  return '<tr id="' + item.itemId + '" >\n\n    <td class="cart-qty">1</td>\n    <td class="cart-item-type">' + item.itemName + '</td>\n    <td class"cart-item-size">' + item.size + '</td>\n    <td class="cart-remove">\n      <form accept-charset="UTF-8"  class="intform" >\n        <button class="button remove" id="removed" type="submit">remove</button>\n      </form>\n    </td>\n    <td class="cart-price">\n      <span class="cart-price-span">$' + item.itemPrice + '</span>\n    </td>\n  </tr>';
	}

	$('.products').on('submit', function (e) {
	  e.preventDefault();
	  var itemId = Math.floor(Math.random() * 1000000);
	  var itemName = $(e.target).attr('data-item');
	  var itemPrice = $(e.target).attr('data-price');
	  var size = $(e.target).find('select').val();
	  var item = {
	    itemName: itemName,
	    itemPrice: itemPrice,
	    size: size,
	    itemId: itemId
	  };

	  window.store.cart.items.push(item);
	  (0, _carts.updateCart)().then(function () {
	    $('#cart-body-table-body').append(translateItemToCartItem(item));
	    $('#' + item.itemId).find('form').on('submit', function (e) {
	      e.preventDefault();
	      removeFromCart(item.itemId);
	      (0, _carts.updateCart)();
	      $('#' + item.itemId).remove();
	    });
	  });
	  $('.subtotal-span').html('$' + sumCartPrices());
	});

	function removeFromCart(id) {
	  window.store.cart.items = window.store.cart.items.filter(function (e) {
	    return e.itemId !== id;
	  });
	  $('#' + id).remove();
	  $('.subtotal-span').html('$' + sumCartPrices());
	  return window.store.cart;
	}

	function sumCartPrices() {
	  return window.store.cart.items.reduce(function (p, e) {
	    return parseInt(p) + parseInt(e.itemPrice || '0');
	  }, 0);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var app = __webpack_require__(6);
	var store = __webpack_require__(7);
	window.app = app;
	app.host = app.apiOrigins.production;

	var addCart = function addCart(data) {
	  return $.ajax({
	    url: app.host + '/carts/',
	    method: 'POST',
	    headers: {
	      Authorization: 'Token token=' + store.user.token
	    }
	  });
	};

	var getCarts = function getCarts() {
	  return $.ajax({
	    url: app.host + '/carts/',
	    method: 'GET',
	    headers: {
	      Authorization: 'Token token=' + store.user.token
	    }
	  });
	};

	var getOrCreateCart = function getOrCreateCart(callback) {
	  $('.logged-in-element').show();
	  return getCarts().then(function (data) {
	    if (data.carts.length > 0) {
	      store.cart = data.carts[0];
	      callback(store.cart.items);
	    } else {
	      return addCart().then(function (data) {
	        store.cart = data.cart;
	        callback(store.cart.items);
	      });
	    }
	  });
	};

	var deleteCart = function deleteCart() {
	  return $.ajax({
	    url: app.host + '/carts/' + store.cart.id,
	    method: 'DELETE',
	    headers: {
	      Authorization: 'Token token=' + store.user.token
	    }
	  });
	};

	var updateCart = function updateCart() {
	  return $.ajax({
	    url: app.host + '/carts/' + store.cart.id,
	    method: 'PATCH',
	    data: {
	      cart: store.cart
	    },
	    headers: {
	      Authorization: 'Token token=' + store.user.token
	    }
	  });
	};

	var getCart = function getCart(id) {
	  return $.ajax({
	    method: 'GET',
	    url: app.host + '/carts/' + id,
	    headers: {
	      Authorization: 'Token token=' + store.user.token
	    }
	  });
	};

	module.exports = {
	  getOrCreateCart: getOrCreateCart,
	  getCart: getCart,
	  getCarts: getCarts,
	  addCart: addCart,
	  deleteCart: deleteCart,
	  updateCart: updateCart
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var config = {
	  apiOrigins: {
	    production: 'https://secret-journey-84193.herokuapp.com',
	    development: 'http://localhost:4741'
	  }
	};

	module.exports = config;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var store = {
	  host: 'http://localhost:4741/'
	};

	window.store = store;

	module.exports = store;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _store = __webpack_require__(7);

	var _store2 = _interopRequireDefault(_store);

	var _auth = __webpack_require__(9);

	var auth = _interopRequireWildcard(_auth);

	var _carts = __webpack_require__(5);

	var _initializeCart = __webpack_require__(3);

	var _getFormFields = __webpack_require__(10);

	var _getFormFields2 = _interopRequireDefault(_getFormFields);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.store = _store2.default;

	$(function () {
	  $('#sign-up').on('submit', function (e) {
	    e.preventDefault();
	    var creds = (0, _getFormFields2.default)(e.target);
	    var credentials = creds.credentials;

	    if (credentials.password !== credentials.password_confirmation) {
	      document.getElementById("sign-up").reset();

	      $('.inline-alert').css('color', 'red');
	      setTimeout(function () {
	        $('.inline-alert').css('color', 'black');
	      }, 2000);
	      return;
	    }
	    document.getElementById("sign-up").reset();
	    auth.signUp(creds).then(function () {
	      $('.auth-hide').hide();
	      $('.sign-in').show();
	    }).catch(function (err) {
	      $('.inline-alert').css('color', 'red');
	      setTimeout(function () {
	        $('.inline-alert').css('color', 'black');
	      }, 2000);
	    });
	  });

	  $('#sign-in').on('submit', function (e) {
	    e.preventDefault();
	    var creds = (0, _getFormFields2.default)(e.target);
	    document.getElementById("sign-in").reset();
	    auth.signIn(creds).then(function (data) {
	      _store2.default.user = data.user;
	    }).then(function () {
	      $('.auth-hide').hide();
	      $('.shop').show();
	      (0, _carts.getOrCreateCart)(_initializeCart.translateCartToCartView);
	    }).catch(function (err) {
	      $('.inline-alert').css('color', 'red');
	      setTimeout(function () {
	        $('.inline-alert').css('color', 'black');
	      }, 2000);
	    });
	  });

	  $('.sign-out').on('click', function (e) {
	    window.store.cart = [];
	    $('#cart-body-table-body').html('');
	    $('.subtotal-span').html('$0');
	    e.preventDefault();
	    auth.signOut();
	    $('.logged-in-element').hide();
	  });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	// const app = require('../config.js');

	var app = __webpack_require__(6);
	var store = __webpack_require__(7);
	window.app = app;
	app.host = app.apiOrigins.production;

	var signUp = function signUp(data) {
	  return $.ajax({
	    url: app.host + '/sign-up/',
	    method: 'POST',
	    data: data
	  });
	};

	var signIn = function signIn(data) {
	  return $.ajax({
	    url: app.host + '/sign-in/',
	    method: 'POST',
	    data: data
	  });
	};

	var signOut = function signOut() {
	  return $.ajax({
	    method: 'DELETE',
	    url: app.host + '/sign-out/' + store.user._id,
	    headers: {
	      Authorization: 'Token token=' + store.user.token
	    }
	  });
	};

	var changePassword = function changePassword(data) {
	  return $.ajax({
	    method: 'PATCH',
	    url: app.host + '/change-password/' + store.user._id,
	    headers: {
	      Authorization: 'Token token=' + store.user.token
	    },
	    data: data
	  });
	};

	module.exports = {
	  signUp: signUp,
	  signIn: signIn,
	  signOut: signOut,
	  changePassword: changePassword
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var addNestedValue = __webpack_require__(11);

	var getFormFields = function getFormFields(form) {
	  var target = {};

	  var elements = form.elements || [];
	  for (var i = 0; i < elements.length; i++) {
	    var e = elements[i];
	    if (!e.hasAttribute('name')) {
	      continue;
	    }

	    var type = 'TEXT';
	    switch (e.nodeName.toUpperCase()) {
	      case 'SELECT':
	        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type;
	        break;
	      case 'INPUT':
	        type = e.getAttribute('type').toUpperCase();
	        break;
	    }

	    var name = e.getAttribute('name');

	    if (type === 'MULTIPLE') {
	      for (var _i = 0; _i < e.length; _i++) {
	        if (e[_i].selected) {
	          addNestedValue(target, name, e[_i].value);
	        }
	      }
	    } else if (type !== 'RADIO' && type !== 'CHECKBOX' || e.checked) {
	      addNestedValue(target, name, e.value);
	    }
	  }

	  return target;
	};

	module.exports = getFormFields;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	var addNestedValue = function addNestedValue(pojo, name, value) {
	  var recurse = function recurse(pojo, keys, value) {
	    value = decodeURIComponent(value);
	    var key = decodeURIComponent(keys.shift());
	    var next = keys[0];
	    if (next === '') {
	      // key is an array
	      pojo[key] = pojo[key] || [];
	      pojo[key].push(value);
	    } else if (next) {
	      // key is a parent key
	      pojo[key] = pojo[key] || {};
	      recurse(pojo[key], keys, value);
	    } else {
	      // key is the key for value
	      pojo[key] = value;
	    }

	    return pojo;
	  };

	  var keys = name.split('[').map(function (k) {
	    return k.replace(/]$/, '');
	  });
	  return recurse(pojo, keys, value);
	};

	module.exports = addNestedValue;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var parseNestedQuery = __webpack_require__(13);

	/*
	  possibilites to handle and example URLs:

	  client local, api local
	    http://localhost:7165/
	  client local, api remote
	    http://localhost:7165/?environment=production
	  client remote, api local
	    https://ga-wdi-boston.github.io/browser-template/?environment=development
	    This will require allowing "unsafe scripts" in Chrome
	  client remote, api remote
	    https://ga-wdi-boston.github.io/browser-template/
	*/

	var setAPIOrigin = function setAPIOrigin(location, config) {
	  // strip the leading `'?'`
	  var search = parseNestedQuery(location.search.slice(1));

	  if (search.environment === 'development' || location.hostname === 'localhost' && search.environment !== 'production') {
	    if (!(config.apiOrigin = config.apiOrigins.development)) {
	      var port = +'GA'.split('').reduce(function (p, c) {
	        return p + c.charCodeAt().toString(16);
	      }, '');
	      config.apiOrigin = 'http://localhost:' + port;
	    }
	  } else {
	    config.apiOrigin = config.apiOrigins.production;
	  }
	};

	module.exports = setAPIOrigin;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var addNestedValue = __webpack_require__(11);

	var parseNestedQuery = function parseNestedQuery(queryString) {
	  return queryString.split('&').reduce(function (memo, element) {
	    if (element) {
	      var keyValuePair = element.split('=');
	      memo = addNestedValue(memo, keyValuePair[0], keyValuePair[1]);
	    }

	    return memo;
	  }, {});
	};

	module.exports = parseNestedQuery;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	module.exports = true;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	function fix24HourTime(hr) {
	  if (hr > 12) {
	    return hr - 12;
	  } else {
	    return hr;
	  }
	}

	function fixMinuteSecondZero(num) {
	  if (num < 10) {
	    return '0' + num;
	  } else {
	    return num;
	  }
	}

	function updateClock() {
	  var now = new Date(); // current date
	  var months = ['January', 'February', '...']; // you get the idea
	  var time = fixMinuteSecondZero(fix24HourTime(now.getHours())) + ':' + fixMinuteSecondZero(now.getMinutes()),
	      // again, you get the idea

	  // a cleaner way than string concatenation
	  date = [now.getDate(), months[now.getMonth()], now.getFullYear()].join(' ');
	  var str = [date, time].join(' / ');
	  // set the content of the element with the ID time to the formatted string
	  $('.time-time').html(str);

	  // call this function again in 1000ms
	  setTimeout(updateClock, 1000);
	}
	updateClock(); // initial call
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports


	// module
	exports.push([module.id, "/**\n * Import Page Modules\n */\n/**\n *  Default element styles\n */\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n  background: black; }\n\nh1 {\n  margin-left: 1px;\n  margin-top: 35px;\n  font-size: 52px;\n  font-weight: 200;\n  color: white;\n  font-family: 'Megrim', cursive;\n  transform: rotate(45deg); }\n\nh3 {\n  font-size: 21px;\n  font-family: \"Courier New\", \"Courier\", \"Monaco\";\n  font-weight: 100; }\n\nul {\n  margin: 0;\n  padding: 0; }\n\np {\n  margin: 0;\n  margin-top: 10px;\n  margin-bottom: 4px;\n  text-align: center;\n  font-size: 18px;\n  color: white;\n  font-family: 'Megrim', cursive; }\n\na {\n  cursor: pointer; }\n\nhr {\n  margin: 0;\n  border: 1px solid white;\n  background-color: white;\n  transform-origin: 100%;\n  opacity: 0; }\n\n.logged-in-element {\n  display: none; }\n\n/**\n * Site Nav\n */\n.nav {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: black;\n  font-family: 'Megrim', cursive; }\n  .nav-item-link {\n    display: block;\n    margin: 0;\n    padding: 14px 16px;\n    text-align: center;\n    text-decoration: none;\n    list-style: none;\n    font-family: 'Megrim', cursive;\n    color: white; }\n    .nav-item-link:hover:not(.active) {\n      background-color: black;\n      text-decoration: underline; }\n    .nav-item-link.active {\n      border: 1px solid white;\n      font-size: 30px;\n      padding: 4px; }\n  .nav-item-left {\n    float: left; }\n  .nav-item-right {\n    float: right; }\n\n@media screen and (max-width: 500px) {\n  .nav-item-right,\n  .nav-item {\n    float: none; } }\n\n.authentication {\n  display: none;\n  margin: 25% auto;\n  width: 5%; }\n\n.sign-in {\n  display: none;\n  margin: 25% auto;\n  width: 5%; }\n\n#sign-in {\n  margin-top: -125px; }\n\n#sign-up {\n  margin-top: -165px; }\n\ninput {\n  margin-top: 25%;\n  padding: 4px 50px; }\n\n.btn-one {\n  background: red;\n  color: white;\n  text-align: center;\n  border: 1px solid red;\n  padding: 1px 10px;\n  font-family: \"Courier New\", \"Courier\", \"Monaco\"; }\n\n.btn-two {\n  background: red;\n  color: white;\n  text-align: center;\n  border: 1px solid red;\n  padding: 1px 10px;\n  font-family: \"Courier New\", \"Courier\", \"Monaco\"; }\n\n.btn-three {\n  background: red;\n  color: white;\n  text-align: center;\n  border: 1px solid red;\n  padding: 1px 10px;\n  font-family: \"Courier New\", \"Courier\", \"Monaco\"; }\n\n#logo-up {\n  margin-top: -224px; }\n\n#logo-in {\n  margin-top: -184px; }\n\n.signout {\n  display: none;\n  margin-top: 15%; }\n\n.logo-out {\n  margin-top: -224px; }\n\n#logo-signout {\n  margin-top: -54px; }\n\n.out {\n  width: 15%;\n  text-align: left;\n  font-family: \"Courier New\", \"Courier\", \"Monaco\";\n  position: fixed;\n  margin-left: -16%;\n  margin-top: 0%; }\n\n.logout {\n  width: 45%;\n  text-align: left;\n  font-family: \"Courier New\", \"Courier\", \"Monaco\";\n  position: fixed;\n  margin-left: 32%;\n  font-size: 12px; }\n\n.sign-in-text {\n  margin: 0;\n  margin-top: 10px;\n  margin-bottom: 4px;\n  text-align: left;\n  font-size: 10px;\n  color: white;\n  font-family: \"Courier New\", \"Courier\", \"Monaco\"; }\n\n.shop {\n  display: none;\n  margin-bottom: 50px; }\n  .shop-item {\n    margin-top: 10%;\n    float: left;\n    width: 33.3%;\n    display: inline-block;\n    text-align: center; }\n    .shop-item#first {\n      margin-top: 10%;\n      cursor: pointer;\n      display: inline-block;\n      opacity: 1;\n      -webkit-transition: .3s ease-in-out;\n      transition: .3s ease-in-out; }\n    .shop-item-img {\n      height: 20%;\n      cursor: pointer;\n      display: inline-block;\n      width: 100%; }\n      .shop-item-img:hover {\n        opacity: 0.5;\n        -webkit-transition: .3s ease-in-out;\n        transition: .3s ease-in-out; }\n\n@media screen and (max-width: 500px) {\n  .shop-item-img {\n    margin-top: 7%; }\n  .shop-item {\n    width: 100%; }\n    .shop-item#first {\n      margin-top: 45%; } }\n\n/**\n *  Cart styles\n */\n#content {\n  height: auto;\n  position: relative;\n  border: 1px dotted white;\n  position: relative;\n  display: none;\n  margin: 10% auto;\n  width: 60%; }\n\n.alert {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 250px;\n  color: white;\n  border-radius: 6px;\n  padding: 10px;\n  height: 50px;\n  font-size: 12px;\n  background-color: slategrey;\n  font-family: \"Courier New\", \"Courier\", \"Monaco\"; }\n\n.inline-alert {\n  color: black;\n  font-family: \"Courier New\", \"Courier\", \"Monaco\";\n  font-size: 12px;\n  margin-bottom: 12px;\n  width: 250px; }\n\n#cart-body {\n  overflow: scroll; }\n\n.selected {\n  background: #636363;\n  color: #fff;\n  padding: 13px;\n  text-align: center; }\n\nb {\n  font-family: \"Courier New\", \"Courier\", \"Monaco\"; }\n\n#cart-subtotal p {\n  border-top: 1px dotted #999;\n  border-left: 1px dotted #999;\n  float: right;\n  line-height: 2.2em;\n  margin-top: 38%;\n  font-size: 14px;\n  font-family: \"Courier New\", \"Courier\", \"Monaco\";\n  padding: 0 18px 0 18px; }\n\n#cart-footer {\n  margin-top: 41.5%;\n  height: 42px;\n  border-top: 1px dotted #999; }\n\n.checkout {\n  margin-left: 82.1%;\n  margin-top: 5px;\n  position: absolute;\n  cursor: pointer;\n  font-size: 11px;\n  background: red;\n  border: 1px solid red;\n  border-radius: 0;\n  color: #fff;\n  padding: 0px;\n  text-align: center;\n  width: 98px;\n  font-weight: bold;\n  padding: 10px 25px;\n  text-decoration: none; }\n\n.continue {\n  margin-left: 67.7%;\n  margin-top: 5px;\n  position: absolute;\n  cursor: pointer;\n  font-size: 11px;\n  background: white;\n  border-radius: 0;\n  color: black;\n  text-align: center;\n  width: 98px;\n  font-weight: bold;\n  padding: 10px 10px;\n  text-decoration: none; }\n\n.delete {\n  margin-left: 53.4%;\n  margin-top: 5px;\n  position: absolute;\n  cursor: pointer;\n  font-size: 11px;\n  background: slategrey;\n  border-radius: 0;\n  color: white;\n  text-align: center;\n  width: 98px;\n  font-weight: bold;\n  padding: 10px 10px;\n  text-decoration: none; }\n\n#removed {\n  position: absolute;\n  margin-top: -6px;\n  margin-left: 76px;\n  cursor: pointer;\n  font-size: 11px;\n  background: red;\n  border: 1px solid red;\n  border-radius: 0;\n  color: #fff;\n  display: block;\n  padding: 0px;\n  text-align: center;\n  width: 98px;\n  font-weight: bold; }\n\ntd {\n  color: white;\n  padding-left: 20px;\n  font-family: \"Courier New\", \"Courier\", \"Monaco\"; }\n\n#logo-cart {\n  margin-top: -130px; }\n\n/**\n *  Footer styles\n */\n.footer {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1rem;\n  background-color: black;\n  text-align: center; }\n  .footer-item-link {\n    color: white;\n    font-family: 'Megrim', cursive;\n    text-decoration: none; }\n    .footer-item-link:hover {\n      text-decoration: underline; }\n\n/**\n * Variables\n */\n.content {\n  margin: 0 auto; }\n\n.logo {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.diamond {\n  position: relative;\n  width: 200px;\n  height: 200px;\n  margin: 15% auto 0;\n  transform: rotate(45deg); }\n\n.fade-in {\n  opacity: 0;\n  animation: fade-in 2s;\n  animation-delay: 2s;\n  animation-fill-mode: forwards; }\n\n.diamond-footer {\n  margin-top: 50px; }\n\n.line {\n  position: absolute;\n  width: 100%; }\n\n#top.line {\n  right: 85%;\n  top: -36%;\n  transform: rotate(45deg); }\n\n#right.line {\n  left: 85%;\n  top: -36%;\n  transform: rotate(135deg); }\n\n#bottom.line {\n  left: 85%;\n  bottom: -36%;\n  transform: rotate(-135deg); }\n\n#left.line {\n  left: -85%;\n  bottom: -36%;\n  transform: rotate(-45deg); }\n\n.rotate {\n  animation: rotate 2s;\n  animation-fill-mode: forwards; }\n\n.title-two {\n  margin: 10px auto;\n  border: 2px solid white;\n  width: 110px;\n  text-align: center; }\n\n.two {\n  margin-left: -1px;\n  margin-top: 17px;\n  font-size: 25px;\n  font-weight: 200;\n  color: white;\n  font-family: 'Megrim', cursive;\n  transform: rotate(45deg); }\n\n.title-info {\n  margin-top: -80px;\n  margin-bottom: 4px;\n  text-align: center;\n  font-size: 18px;\n  color: white;\n  font-family: 'Megrim', cursive; }\n\n.wcsd {\n  display: inline-block;\n  margin: 51px 0 0 0;\n  font-family: 'Megrim', cursive;\n  color: white;\n  font-size: 82px;\n  transform: rotate(-45deg); }\n\n.p-two {\n  margin-top: 5px;\n  font-size: 15px; }\n\n.time {\n  margin: 0 auto;\n  font-size: 14px;\n  width: 256px;\n  color: white;\n  font-family: 'Megrim', cursive;\n  text-align: center; }\n\n#diamond-two {\n  width: 64px;\n  height: 64px;\n  background: black;\n  margin: 37px 0 0 123px;\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  -webkit-transform-origin: 0 100%;\n  -moz-transform-origin: 0 100%;\n  -ms-transform-origin: 0 100%;\n  -o-transform-origin: 0 100%;\n  transform-origin: 0 100%; }\n\n.wrapper {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 80%;\n  height: 80%;\n  text-align: center; }\n\n.stripe {\n  display: none; }\n\n.item-one {\n  margin-top: 10%;\n  display: none;\n  text-align: center; }\n\n.item-one-description {\n  font-family: \"Courier New\", \"Courier\", \"Monaco\";\n  margin-top: 140px;\n  display: inline-block;\n  max-width: 300px;\n  color: white;\n  margin-left: 28px; }\n\n.item-text {\n  font-family: \"Courier New\", \"Courier\", \"Monaco\"; }\n\n.img-one {\n  display: inline-block;\n  vertical-align: top; }\n\n.info {\n  margin-bottom: 25px;\n  font-size: 13.5px; }\n\n.wcsd-two {\n  font-family: 'Megrim', cursive; }\n\n.price {\n  float: left;\n  margin-left: 29px; }\n\n#size {\n  float: left;\n  margin-top: 55px;\n  margin-left: -31px;\n  outline: none;\n  cursor: pointer;\n  color: black;\n  width: 7.14286em;\n  border: 1px solid #999; }\n\n.button {\n  position: absolute;\n  margin-top: 88px;\n  margin-left: 31px;\n  cursor: pointer;\n  font-size: 11px;\n  background: red;\n  border: 1px solid red;\n  border-radius: 0;\n  color: #fff;\n  display: block;\n  padding: 0px;\n  text-align: center;\n  width: 98px;\n  font-weight: bold; }\n\n.button-continue {\n  margin-bottom: -45px;\n  margin-top: 87px;\n  float: left;\n  font-size: 11px;\n  padding: 1px;\n  width: 98px;\n  margin-left: 30px;\n  border: 1px solid black;\n  font-weight: bold;\n  cursor: pointer;\n  background: white;\n  color: black;\n  text-decoration: none; }\n\n.keep-shopping:hover {\n  text-decoration: none;\n  opacity: .5; }\n\n.next {\n  font-size: 12px;\n  font-weight: bold;\n  position: absolute;\n  color: white;\n  cursor: pointer;\n  text-decoration: none;\n  margin-top: 59px;\n  margin-left: -6px; }\n\n.next:hover {\n  color: black;\n  background-color: white;\n  text-decoration: none; }\n\n.item-logo {\n  margin-top: -116px; }\n\n.about-wcsd {\n  display: none;\n  width: 45%;\n  text-align: left;\n  margin: 12% auto; }\n\n#about {\n  text-align: left;\n  font-family: \"Courier New\", \"Courier\", \"Monaco\";\n  font-size: 12px;\n  margin-top: 0;\n  margin-bottom: 15px; }\n\n@media screen and (max-width: 500px) {\n  .content {\n    margin: 5% auto 0; }\n  #diamond-two {\n    display: none; }\n  .p-two {\n    display: none; }\n  .logo {\n    display: none; }\n  .title-two {\n    display: none; } }\n\n/**\n * Animations\n */\n@keyframes rotate {\n  100% {\n    transform: rotate(135deg);\n    opacity: 1; } }\n\n@keyframes fade-in {\n  50% {\n    opacity: 1;\n    text-shadow: 0 0 10px #e5e4e2;\n    text-outline: 10px 10px #e5e4e2; }\n  100% {\n    opacity: 1; } }\n", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
]);