var formBotTemplates = {
    select : document.createElement('select'),
    text : document.createElement('input')
}

angular.module('appform')
    .directive('formBot', function(){
        return function(scope, element, attrs){
            var form = scope[attrs["formBot"]];

            var selectInput = function(input, form){

                var thisTemplate;

                switch(form[input].type){
                    case "select" :
                        thisTemplate =  formBotTemplates.select;
                        thisTemplate.name = form[input].name;
                        thisTemplate.placeholder = form[input].placeHolder;
                        for(var i = 0; i < form[input].options.length; ++i){
                            var option = '<option value="' + i + '">' + form[input].options[i] + '</option>';
                            thisTemplate.appendChild(option);
                        }
                        if(form[input].require){
                            thisTemplate.required = 'required';
                        }
                        break;

                    default :
                        thisTemplate =  formBotTemplates.text;
                        thisTemplate.type = "text";
                        thisTemplate.name = form[input].name;
                        thisTemplate.placeholder = form[input].placeHolder;
                        if(form[input].require){
                            thisTemplate.required = 'required';
                        }
                        break;
                }

                return thisTemplate;
            };

            for(var input in form){
                var tmpInput = selectInput(input, form);
                element.append(tmpInput);
            }
        }
    });