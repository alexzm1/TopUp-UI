angular.module('appTopUp'
	).controller('AppCtrl', ['$rootScope', '$location', 'appPaths',
		function ($rootScope, $location, appPaths) {
			'use strict';
			$rootScope.alerts = [];
			$rootScope.$on('$routeChangeError', function(angularEvent, current, previous, rejection){	
				var appPath = appPaths[current.$$route.originalPath];
				if(appPath){
					$rootScope.alerts.push({type:'alert round', message: rejection.message});
					$location.url(appPath.errorLanding+'?transId='+current.params.transId);
				}
			});
		}]);
