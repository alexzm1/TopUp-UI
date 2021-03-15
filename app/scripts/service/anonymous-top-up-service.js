angular.module('anonymousServices', []
        ).factory('anonymousTopUpService', 
            function($http, $q, $sessionStorage){
                'use strict';
                var apiUrl = './TopUp-Services/api';
                    
                return {
                    queryMobileNumber: function(transId) {
                            var defer = $q.defer();
                            var mobile = $sessionStorage[transId];
                            if(mobile){
                                $http({
                                method: 'GET',
                                url: apiUrl + '/telephone/' + mobile.number
                                }).success(function(data) {
                                    if(data.status === 'ACTIVE'){
                                        defer.resolve(data);
                                    }else {
                                        defer.reject({message : 'This is not a valid mobile number'});
                                    }
                                }).error(function(){
                                    defer.reject({message : 'Error processing query'});
                                });
                            }else{
                                defer.reject({message : 'Invalid transId'});
                            }
                            return defer.promise;
                        }
                    };
                }
            );
