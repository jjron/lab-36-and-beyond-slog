'use strict';

require('./scss/base.scss');
const angular = require('angular');
const uiRouter = require('angular-ui-router');
angular.module('fireslog', [uiRouter])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/admin');
  let routes = [
    {
      name: 'admin',
      url: '/admin',
      template: '<admin></admin>',
    },
    {
      name: 'dashboard',
      url: '/dashboard',
      template: '<h1>the dashboard</h1>',
    },
  ];
  routes.forEach(route => $stateProvider.state(route));
}]);

require('./service/admin-service.js');

require('./container/admin');

require('./component/login');
//require('./component/layout');
