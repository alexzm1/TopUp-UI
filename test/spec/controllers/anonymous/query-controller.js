'use strict';

describe('Controller: queryController', function(){
	var scope, 
		queryController,
		sessionStorage = {},
		location = {
			url: angular.noop
		},
		routeParams = {};

	//Mocked modules
	angular.module('ngStorage',[]);
	angular.module('mm.foundation',[]);

	beforeEach(module('appTopUp'));

	

	beforeEach(function(){
		//Soy on location's property url
		spyOn(location, 'url')
		
		inject(function($controller, $rootScope){
				scope = $rootScope.$new();
				queryController = $controller('queryController', {
					$sessionStorage: sessionStorage,
					$location: location,
					$routeParams: routeParams
				});
			}) 
	});
	
	it('Should have an empty mobile number', function(){

		expect(queryController.mobile.number).toBe('');
	});

	it('Should have the mobile number stored in sessionStorage', function(){
		
		routeParams.transId = "12345";
		sessionStorage["12345"] = {number: "804765345"};

		inject(function($controller, $rootScope){
				scope = $rootScope.$new();
				queryController = $controller('queryController', {
					$sessionStorage: sessionStorage,
					$location: location,
					$routeParams: routeParams
				});
			});

		expect(queryController.mobile.number).toBe(sessionStorage["12345"].number);
	});

	it('location have to be called once', function(){
		queryController.submit();
		expect(location.url).toHaveBeenCalled();
	});

});
