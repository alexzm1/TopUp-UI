angular.module('anonymousServices',[]
        ).factory('anonymousTopUpService', 
            function($http){
                'use strict';
                var apiUrl = 'http://localhost:8080/TopUp-Services/api';
                    
                return {
                    queryMobileNumber: function(mobileNumber) {
                        return $http({
                            method: 'GET',
                            url: apiUrl + '/telephone/' + mobileNumber
                            });
                    }
                };
            });