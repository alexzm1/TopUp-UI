angular.module('authenticatedService', []
              ).factory('oauthService',
    function ($http, $q) {
        'use strict';
    
        var apiUrl = './api';
    
        var oauth = OAuth({
            consumer: {
                public: '3a4393c3da1a4e316ee66c0cc61c71',
                secret: 'fe1372c074185b19c309964812bb8f3f2256ba514aea8a318'
            },
            signature_method: 'HMAC-SHA1'
        });
    
        return {
            getAuthorizationRequest: function() {
                var defer = $q.defer();
                
                var request = {
                    url: apiUrl+'/oauth/oauth_request_token',
                    method: 'POST',
                    data: {
                        oauth_callback: 'google.com'
                    }
                };
                
                var oauth_headers = oauth.toHeader(oauth.authorize(request));
                
                $http.defaults.headers.common.Authorization = oauth_headers.Authorization;
                
                $http({
                    method: request.method,
                    url: apiUrl+'/oauth/oauth_request_token'
                }).success(function (data, status, headers){
                    defer.resolve(data);
                }).error(function(data, status, headers){
                    defer.reject(data);
                });
                defer.promise;
            }
        };
        
    });