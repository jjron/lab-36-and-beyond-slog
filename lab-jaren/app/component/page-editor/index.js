'use strict';

require('angular').module('fireslog')
.component('pageEditor', {
  template: require('./page-editor.html'),
  bindings: {
    page: '<',
    handleSubmit: '<',
  },
});
