angular.module('appform')
    .directive('form-bot', function(){
    return {
        link : function(scope, element){
            alert('otot')
        },
        restrict: "A",
        template : function(elem){
            var line = '<div style="background:red; width : 20px; height : 20px">';

            elem.append(line);
        }
    }
});