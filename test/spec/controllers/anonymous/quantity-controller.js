describe('Controller: queryController', function(){
	

	beforeEach(module('appTopUp'));
	beforeEach(function(){
		inject(function($controller){
			controller = $controller;
		});
	});

	function setupController(sessionStorage, routeParams, queryResponse){
		return controller('quantityController', 
			{
				$sessionStorage : sessionStorage,
				$routeParams : routeParams,
				mobileQueryResponse: queryResponse
			});
	}

	it('Should have query response', function(){
		var storage = {'12344': '8048685521'};
		var routeParams = {transId: '12344'};
		var queryResponse = {};
		controller = setupController(storage, routeParams, queryResponse);
		console.log(controller);
		expect(controller.queryResponse).toBe(queryResponse);
	});



});