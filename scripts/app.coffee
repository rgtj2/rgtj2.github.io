'use strict'

angular.module('oakApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html'
        controller: 'MainCtrl'
      .when '/link1',
        templateUrl: 'views/link1.html'
        controller: 'Link1Ctrl'
      .when '/link2',
        templateUrl: 'views/link2.html'
        controller: 'Link1Ctrl'        
      .otherwise
        redirectTo: '/'
