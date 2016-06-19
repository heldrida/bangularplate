var angular = require('angular');
var ngMock = require('angular-mocks');

var myApp = angular.module('myApp', []);

myApp.controller('helloWorldController', ['$scope', function($scope) {

    $scope.msg = '';

    $scope.sayHello = function() {
        $scope.msg = 'Hello World!';
    };

}]);