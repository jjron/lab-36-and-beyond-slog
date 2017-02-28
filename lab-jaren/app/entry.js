'use strict';

require('./scss/main.scss');
const angular = require('angular');
const ngMarked = require('angular-marked');
const uiRouter = require('angular-ui-router');
const ngClipboard = require('angular-clipboard');
const ngAnimate = require('angular-animate');
const ngTouch = require('angular-touch');

angular.module('fireslog', [uiRouter, ngMarked, ngClipboard.name, 'ngTouch', 'ngAnimate'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/admin');
  let routes = [
    {
      name: 'layout',
      url: '/layout',
      template: '<layout></layout>',
    },
    {
      name: 'admin',
      url: '/admin',
      template: '<admin></admin>',
    },
    {
      name: 'dashboard',
      url: '/dashboard',
      template: '<dashboard></dashboard>',
    },
  ];
  routes.forEach(route => $stateProvider.state(route));
}]);

require('./service/admin-service.js');
require('./service/page-service.js');

require('./container/admin');
require('./container/dashboard');

require('./component/login');
require('./component/layout');
require('./component/page-editor');
require('./component/page-select');
