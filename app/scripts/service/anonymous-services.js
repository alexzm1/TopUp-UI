angular.module('anonymousServices', []
        ).factory('anonymousTopUpService', 
            function($http, $q, $sessionStorage){
                'use strict';
                var apiUrl = 'http://localhost:8080/TopUp-Services/api';
                    
                return {
                    queryMobileNumber: function(transId) {
                            var defer = $q.defer();
                            var mobile = $sessionStorage[transId];
                            $http({
                                method: 'GET',
                                url: apiUrl + '/telephone/' + mobile.number
                                }).success(function(data) {
                                    if(data.status === 'ACTIVE'){
                                        defer.resolve(data);
                                        
                                    }else {
                                        defer.reject({validations : 'This is not a valid mobile number'});
                                        
                                    }
                                
                                }).error(function(){
                                
                                    defer.reject({validations : 'Error processing query'});
                                });
                            return defer.promise;
                        }
                    };
                }
            );
