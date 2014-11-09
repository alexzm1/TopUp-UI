angular.module('appTopUp').directive('mobileNumber', function(){
    'use strict';
    return{
        restrict: 'E',
        template: function(tElement, tAttrs){
            return '<input type="number" ng-minlength="10" ng-maxlength="10" required ng-model="'+ tAttrs.ngModel +'" class="mobileNumber"/>';
        }
    };
});