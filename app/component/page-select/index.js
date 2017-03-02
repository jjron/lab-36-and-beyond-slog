'use strict';

require('./_page-select.scss');

require('angular').module('fireslog')
.component('pageSelect', {
  template: require('./page-select.html'),
  bindings: {
    pages: '<',
    showAll: '<',
    selected: '<',
    handleSelect: '<',
  },
});
