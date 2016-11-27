'use strict';

'\nWhat is a pure function?\n\n* Given the same input, will always return the same output.\n* Produces no side effects.\n* Relies on no external state.\n\nPure functions map between arguments and return values.\n\nFork this pen and turn the impure functions into pure\nfunctions.\n\nMake all the unit tests pass without changing the tests.\n';

// setPrice(item: Object, price: Number) => item: Object
var setPrice = function setPrice(item, price) {
  return Object.assign(item, { price: price });
};

// addToCart(cart: Array, item: Object) => cart: Array
var addToCart = function addToCart(cart, item) {
  cart.push(item);
  return cart;
};

test('setPrice()', function (assert) {
  var msg = 'setPrice() should set the price in the given item object.';
  var immutable = 'original should not be mutated';

  var item = {
    name: 'test',
    price: 30
  };
  var copy = Object.assign({}, item);

  var actual = setPrice(item, 50);
  var expected = {
    name: 'test',
    price: 50
  };

  assert.deepEqual(actual, expected, msg);
  assert.deepEqual(item, copy, immutable);
  assert.end();
});

test('addToCart()', function (assert) {
  var msg = 'should add item to cart';
  var immutable = 'original should not be mutated';

  var originalCart = [];
  var item = {
    name: 'Violator',
    price: 30
  };
  var copy = originalCart.slice();

  var actual = addToCart(originalCart, item);
  var expected = [item];

  assert.deepEqual(actual, expected, msg);
  assert.deepEqual(originalCart, copy, immutable);
  assert.end();
});