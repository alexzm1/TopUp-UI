/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('appTopUp'
    ).controller('queryController', function($scope, $timeout, anonymousTopUpService) {

        $scope.app = {
            title : 'Step 1'
        };

        $scope.mobile = {
            number: '',
            status: false,
            validations: ''
        };

        $scope.queryNumber = function() {
            anonymousTopUpService.queryMobileNumber($scope.mobile.number
                    ).success(function(data, status) {
                if (status === 200) {

                    processResponse(data);
                } else {
                    $scope.mobile.status = false;
                    $scope.mobile.validations = 'Error processing query';
                }
            });
        }

        function processResponse(data) {
            if(data.status === 'ACTIVE'){
                $scope.mobile.status = true;
                $scope.mobile.validations = '';
            }else if($scope.mobile.number !== ''){
                $scope.mobile.status = false;
                $scope.mobile.validations = 'This is not a valid mobile number';
            }
        }

    }
);