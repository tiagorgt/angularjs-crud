'use strict';

angular.module('app', [
  'ngRoute',
  'ngAnimate',
  'ngTouch',
  'ui.bootstrap',
  'ngTable',
  'ui.mask',
  'ui.utils.masks',
  'ngMessages',
  'angular-loading-bar'
]).
  config(['$locationProvider', '$routeProvider', 'cfpLoadingBarProvider', function ($locationProvider, $routeProvider, cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/user-list', {
        template: '<user-list></user-list>'
      })
      .when('/user-registration', {
        template: '<user-registration></user-registration>'
      })
      .when('/user-registration/:id', {
        template: '<user-registration></user-registration>'
      })
      .otherwise({
        redirectTo: '/user-list'
      });
  }])
  .constant('config', {
    urlApi: 'http://localhost:8080'
  });

