angular.module('appTopUp').directive('validationError', function(){
    'use strict';
    return{
        restrict : 'E',
        controller: function($scope, $rootScope){
        	$scope.alerts = $rootScope.alerts;
        	$scope.close = function(index){
        		this.alerts.splice(index,1);
        	};
        },
        template: function(){
        	return '<alert ng-repeat="alert in alerts" type="alert.type" close="close($index)">{{alert.message}}</alert>';
        }
    };
});
