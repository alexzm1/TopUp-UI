/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function QueryController($scope, $timeout, mobileNumberService) {

    var timeout;

    $scope.$watch('mobile.number', validateNumber);

    $scope.$watch('numberServiceResponse.data', processResponse);

    $scope.numberServiceResponse = {
        data: ''
    };

    $scope.validations = {
        mobileNumber: ''
    };

    $scope.mobile = {
        number: '',
        status: false
    };

    function validateNumber(newMobileNumber, oldMobileNumber, scope) {

        if (newValIsDifferentThanOldVal(newMobileNumber, oldMobileNumber)) {
            if (timeout) {
                $timeout.cancel(timeout);
            }

            timeout = $timeout(queryNumber(newMobileNumber), 350);

        } else {

            scope.validations.mobileNumber = "";

        }

    }

    function queryNumber(mobileNumber) {
        mobileNumberService.queryMobileNumber(mobileNumber
                ).success(function(data, status) {
            if (status === 200) {
                $scope.numberServiceResponse.data = data;
            } else {
                $scope.validations.mobileNumber =
                        'Error processing query';
            }
        });
    }

    function newValIsDifferentThanOldVal(newVal, oldVal) {
        return newVal !== oldVal;
    }

    function processResponse(newResponse) {
        if(newResponse.status){
            $scope.mobile.status = newResponse.status;
            $scope.validations.mobileNumber = '';
        }else if($scope.mobile.number !== ''){
            $scope.validations.mobileNumber = 'This is not a valid mobile number';
        }
    }

}

