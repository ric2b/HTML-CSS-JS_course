var module = angular.module("demoApp", []);

var controller = module.controller('demoController', initController);

function initController($scope, $http) {
    $http.get('http://httpbin.org/ip')
        .then(function (response) {
           $scope.resultJSON = JSON.stringify(response);
           $scope.resultProperty = response.data.origin;
        });
}
