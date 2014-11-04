angular.module('appform', []);

angular.module('appform')
    .controller("testForm", function($scope){
    var model = {
        "campaign":"",
        "manager":"",
        "sales":"",
        "status":"",
        "orderBy":"trlalala",
        "display":false,
        "options":[]
    };

    $scope.model = model;
});