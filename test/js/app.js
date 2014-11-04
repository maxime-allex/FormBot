var app = angular.module('appForm', []);

app.controller("testForm", function($scope){
    var model = {
        "campaign":"",
        "manager":"",
        "sales":"",
        "status":"",
        "orderBy":"",
        "display":false,
        "options":[]
    };

    $scope.model = model;
});