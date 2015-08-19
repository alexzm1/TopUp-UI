'use strict';
describe('Service: anonymousTopUpService', function() {
	var httpBackend, rootScope;
	
	beforeEach(module('anonymousServices'));

	function getService(sessionStorage) {
		var service;
		module(function($provide){
			$provide.value('$sessionStorage', sessionStorage);
		})

		inject(function($httpBackend, $rootScope, anonymousTopUpService){
			service = anonymousTopUpService;
			rootScope = $rootScope;
			httpBackend = $httpBackend;
		});

		return service;
	}

	it('Should have an invalid transId', function(done) {

		getService({}).queryMobileNumber('12345'
			).then(function(result) {
					setTimeout(done.fail('Promise returned success with object: '+ result),0);
				}, function(result) {
					if(result) {
						expect(result.message).toBe('Invalid transId');
						setTimeout(done,0);
					} else {
						setTimeout(done.fail('Promise was rejected as expected but result object was empty'), 0);
					}
				});
		rootScope.$apply();
	});

	it('Should mobile number in transId returns a non ACTIVE state', function(done) {
		var service = getService({'12345' : {'number' : '567898'}});
		httpBackend.when('GET','./TopUp-Services/api/telephone/567898').respond(200, {status:'INACTIVE'});
		var response = service.queryMobileNumber('12345');
		httpBackend.flush();

		response.then(function(result) {
				setTimeout(done.fail('Promise returned success with object: '+ result),0);
			}, function(result) {
				if (result) {
					expect(result.message).toBe('This is not a valid mobile number');
					setTimeout(done,0);
				} else {
					setTimeout(done.fail('Promise was rejected with an empty result object'), 0);
				}
			});
		rootScope.$apply();
	});

	it('Should get an error procesing the query', function(done) {
		var service = getService({'12345' : {'number' : '567898'}});
		httpBackend.when('GET','./TopUp-Services/api/telephone/567898').respond(500);
		var response = service.queryMobileNumber('12345');
		httpBackend.flush();

		response.then(function(result){
				setTimeout(done.fail('Promise returned success with object: '+ result),0);
			}, function(result){
				if (result) {
					expect(result.message).toBe('Error processing query');
					setTimeout(done,0);
				} else {
					setTimeout(done.fail('Promise was rejected with an empty result object'), 0);
				}
			});
		rootScope.$apply();
	});

	it('Should return an ACTIVE phone number', function(done) {
		var service = getService({'12345' : {'number' : '567898'}});
		httpBackend.when('GET','./TopUp-Services/api/telephone/567898').respond(200, {status: 'ACTIVE'});
		var response = service.queryMobileNumber('12345');
		httpBackend.flush();

		response.then(function(result){
				expect(result.status).toBe('ACTIVE');
				setTimeout(done,0);
			}, function(result){
				setTimeout(done.fail('Promise returned rejected with object: '+ result),0);
			});
		rootScope.$apply();
	});

});
