var angular = require('angular');
var ngMock = require('angular-mocks');
var uiRouter = require('angular-ui-router');

var myApp = angular.module('myApp', [uiRouter]);

myApp.controller('helloWorldController', ['$scope', function($scope) {

    $scope.msg = '';

    $scope.sayHello = function() {
        $scope.msg = 'Hello World!';
    };

}]);