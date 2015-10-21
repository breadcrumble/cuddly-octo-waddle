angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html'
      })
      .state('technical', {
        url: '/technical',
        templateUrl: 'partials/technical.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'partials/about.html'
      })
      .state('bounce', {
        url: '/bounce',
        templateUrl: 'partials/bounce.html'
      })
      .state('epg', {
        url: '/epg',
        templateUrl: 'partials/epg.html'
      })
      .state('calculator', {
        url: '/calculator',
        templateUrl: 'partials/calculator.html'
      })
      .state('shorting', {
        url: '/shorting',
        templateUrl: 'partials/shorting.html'
      })
      .state('ver2', {
        url: '/wa6v2',
        templateUrl: 'partials/wa6steps.html'
      })
      .state('calendar', {
        url: '/calendar',
        templateUrl: 'partials/calendar.html'
      });
  })
  .factory('_', function() {
    return window._;
  });
