// describe('example test', function() {
//   it('should be true', function() {
//     expect('foo').toBe('foo');
//   });
// });

describe('Hello world test!', function() {
  beforeEach(angular.mock.module("myApp"))

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    it('set hello world message', function() {
      var $scope = {};
      var controller = $controller('helloWorldController', { $scope: $scope });
      $scope.sayHello();
      expect($scope.msg).toEqual('Hello World!');
    });
  });
});