angular.module('anonymousServices',[]
    ).factory('anonymousTopUpService', function($http){
        var apiUrl = 'http://localhost:8080/TopUp-Services/api';

        var runMobileNumberQuery = function(mobileNumber) {
            return $http({
                method: 'GET',
                url: apiUrl + '/telephone/' + mobileNumber
            });
        };
        return {
            queryMobileNumber: function(mobileNumber) {
               return runMobileNumberQuery(mobileNumber);
            }
        };
});