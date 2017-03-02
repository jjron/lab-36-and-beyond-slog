'use strict';

require('./_page-editor.scss');

require('angular').module('fireslog')
.component('pageEditor', {
  template: require('./page-editor.html'),
  bindings: {
    page: '<',
    handleSubmit: '<',
  },
});
