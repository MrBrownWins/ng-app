var app = angular.module("AngularApp", []);

app.controller("mainController", function($scope, $http){
    $scope.name = "Mukhammad Karimov";
    console.log($scope);
    console.log($http);
});
