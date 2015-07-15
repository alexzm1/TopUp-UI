angular.module('appTopUp').directive('validationError', function(){
    'use strict';
    return{
        restrict : 'E',
        controller: function($scope, $rootScope){
            this.alerts = $rootScope.alerts;
            this.close = function(index){
                this.alerts.splice(index,1);
            };
        },
        controllerAs: 'validationeError',
        template: function(){
            return '<alert ng-repeat="alert in validationeError.alerts" type="alert.type" close="validationeError.close($index)">{{alert.message}}</alert>';
        }
    };
});
