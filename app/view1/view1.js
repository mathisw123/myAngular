'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider',  function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','dataService', function($scope, dataService) {
  console.log("View1Ctrl \n\n\n\n");

  dataService.getUserList().then(function(data){
      $scope.users = data;
  });
}]);