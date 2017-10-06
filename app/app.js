'use strict';

angular.module('app', [
  'ngRoute',
  'ngAnimate',
  'ngTouch',
  'ui.bootstrap',
  'ngTable',
  'ui.mask',
  'ui.utils.masks',
  'ngMessages'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/user-list', {
        template: '<user-list></user-list>'
      })
      .when('/user-registration', {
        template: '<user-registration></user-registration>'
      })
      .otherwise({
        redirectTo: '/user-list'
      });
  }]);
