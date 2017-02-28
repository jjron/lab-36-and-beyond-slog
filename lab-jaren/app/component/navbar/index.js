'use strict';

require('angular').module('fireslog')
.component('navbar', {
  template: require('./navbar.html'),
  bindings: {
    pages: '<',
    handleSelect: '<',
  },
});
