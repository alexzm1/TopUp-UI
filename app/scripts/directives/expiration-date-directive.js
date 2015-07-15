angular.module('appTopUp').directive('expirationDate', function(){
	'use strict';
	return {
		restrict: 'E',
		templateUrl: 'views/directives/expiration-date.html',
		controllerAs: 'expDate',
		scope: {
			expirationMonth: '=',
			expirationYear: '='
		},
		controller: function(){
			this.months = [];
			this.years = [];
			for(var counterMonth = 1; counterMonth < 13; counterMonth++){
				this.months.push(counterMonth);
			}
			var currentYear = new Date().getFullYear();
			for(var counterYear = currentYear; counterYear < currentYear + 20; counterYear++){
				this.years.push(counterYear);
			}
		}
	};
});