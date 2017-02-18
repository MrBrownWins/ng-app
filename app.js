var app = angular.module("AngularApp", []);

app.controller("mainController", function($scope, $timeout){
    $scope.name = "Mukhammad Karimov";
    $scope.clock = {};
    var updateClock = function() {
        $scope.clock.now = new Date();
        $timeout(function(){
            updateClock();
        }, 1000);
    };
    updateClock();
    console.log($scope);
});
