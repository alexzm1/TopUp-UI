/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function MobileNumberService($http) {

    var api_url = 'http://localhost:8080/TopUp-Services/api';

    var runMobileNumberQuery = function(mobileNumber) {
        return $http({
            method: 'GET',
            url: api_url + '/user/' + mobileNumber
        });
    };

    return {
        queryMobileNumber: function(mobileNumber) {
           return runMobileNumberQuery(mobileNumber);
        }
    };

}
