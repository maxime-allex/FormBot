angular.module('appform', []);

angular.module('appform')
    .controller("testForm", function($scope){
        var model = {
            "campaign":{
                "name" : "inputName",
                "type" : "text",
                "placeHolder" : "Enter the campaign name",
                "require" : true
            },
            "manager":{
                "name" : "inputName",
                "type" : "select",
                "placeHolder" : "choose the manager",
                "options" : [
                    "trlalala",
                    "tralala",
                    "tralalali"
                ],
                "require" : false
            }
        };

        $scope.model = model;
});