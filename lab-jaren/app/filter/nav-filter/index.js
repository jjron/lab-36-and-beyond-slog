'use strict';

require('angular').module('fireslog')
.filter('navFilter', function() {
  return function(pages) {
    return pages.filter(p => p.showInNav);
  };
});
