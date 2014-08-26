'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/answers', {templateUrl: 'partials/answers.html', controller: 'MyCtrl1'});
  $routeProvider.when('/questions', {templateUrl: 'partials/questions.html', controller: 'MyCtrl1'});
  $routeProvider.otherwise({redirectTo: '/questions'});
}]);
