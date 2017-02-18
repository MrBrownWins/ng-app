var app = angular.module("AngularApp", []);

app.controller("mainController", function($scope, $http){
    $scope.name = "I am coming from controller";
    console.log($scope);
    console.log($http);
});
