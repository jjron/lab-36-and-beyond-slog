'use strict';

require('angular').module('fireslog')
.filter('pageSearchFilter', function() {
  return function(pages, searchTerm) {
    console.log('pages', pages);
    console.log('searchTerm', searchTerm);
    let fuzzyRegex = generateFuzzyRegex(searchTerm);
    console.log('fuzzyReg', fuzzyRegex);
    return pages.filter(page => {
      return fuzzyRegex.test(page.title.toLowerCase());
    });
  };
});

function generateFuzzyRegex(term) {
  if(!term) return /.*/;
  let fuzzy = term.toLowerCase().split('').join('.*');
  return new RegExp(`.*${fuzzy}.*`);
}
