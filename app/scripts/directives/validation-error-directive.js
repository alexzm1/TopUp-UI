angular.module('appTopUp').directive('validationError', function(){
    'use strict';
    return{
        restrict : 'E',
        template: function(tElement, tAttrs){
            return '<div ng-show="'+tAttrs.ngModel+'">'+
            '<label>{{'+tAttrs.ngModel+'}}</label>'+
            '</div>';
        }
    };
});