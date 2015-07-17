'use strict';

describe('Controller: queryController', function(){
	var controller,
		location = {
			url: angular.noop
		};

	//Mocked modules
	angular.module('ngStorage',[]);
	angular.module('mm.foundation',[]);

	beforeEach(module('appTopUp'));

	beforeEach(function(){
		//Soy on location's property url
		spyOn(location, 'url')
		
		inject(function($controller){
				controller = $controller;
			})
	});

	function setupController(routeParams, sessionStorage){
		return controller('queryController', {
					$routeParams: routeParams,
					$location: location,
					$sessionStorage: sessionStorage,
				});
	}
	
	it('Should have an empty mobile number', function(){

		expect(setupController({}).mobile.number).toBe('');
	});

	it('Should have the mobile number stored in sessionStorage', function(){
		var storage = {
			'12345': {
				'number': '804765345'
			}
		};
		expect(setupController({'transId': '12345'}, storage).mobile.number).toBe(storage['12345'].number);
	});

	it('location have to be called once', function(){
		setupController({},{}).submit();
		expect(location.url).toHaveBeenCalled();
	});

});
