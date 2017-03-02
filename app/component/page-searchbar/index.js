'use strict';

require('./_page-searchbar.scss');

require('angular').module('fireslog')
.component('pageSearchbar', {
  template: require('./page-searchbar.html'),
  bindings: {
    pages: '<',
    handleSelect: '<',
    searchterm: '<',
  },
});
