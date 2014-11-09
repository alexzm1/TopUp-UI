angular.module('anonymousServices', []
        ).factory('anonymousTopUpService', 
            function($http, $q, $routeParams, $sessionStorage){
                'use strict';
                var apiUrl = 'http://localhost:8080/TopUp-Services/api';
                    
                return {
                    queryMobileNumber: function() {
                            var defer = $q.defer();
                            $http({
                                method: 'GET',
                                url: apiUrl + '/telephone/' + $sessionStorage[$routeParams.transId]
                                }).success(function(data) {
                                    if(data.status === 'ACTIVE'){
                                        
                                        defer.resolve({status : true});
                                        return defer.promise;
                                    }else {
                                        
                                        defer.reject({validations : 'This is not a valid mobile number'});
                                        return defer.promise;
                                    }

                                }).error(function(){
                                    defer.reject({validations : 'Error processing query'});
                                    return defer.promise;
                                });
                            
                        }
                    };
                }
            );