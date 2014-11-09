angular.module('appTopUp'
    ).controller('globalController', function($rootScope){
        'use strict';
        // Route Promise error handler
        $rootScope.$on('routeChangeError', function(event, current, previous, rejection){
            console.log('event: '+event);
            console.log('current: '+current);
            console.log('previous: '+previous);
            console.log('rejection: '+rejection);
        });
    });