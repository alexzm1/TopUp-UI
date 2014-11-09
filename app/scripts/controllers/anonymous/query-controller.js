/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('appTopUp'
    ).controller('queryController', function($sessionStorage, $location, anonymousTopUpService) {

        this.storage = $sessionStorage;
    
        this.form = {
            validation : ''
        };
    
        this.mobile = {
            number: ''
        };

        this.queryNumber = function() {
            var responseContainer = this.mobile;
            anonymousTopUpService.queryMobileNumber(this.mobile.number).success(function(data, status) {
                if(data.status === 'ACTIVE'){
                    responseContainer.status = true;
                    responseContainer.validations = '';
                    
                }else if(responseContainer.number !== ''){
                    responseContainer.status = false;
                    responseContainer.validations = 'This is not a valid mobile number';
                    
                }
                
            }).error(function(data, status){
                responseContainer.status = false;
                responseContainer.validations = 'Error processing query';
                
            });
        };
        
        this.goTopup = function() {
            if(this.form){
                var timeStamp = new Date().getTime();
                this.storage[timeStamp] = this.mobile;
                $location.url('/anonymous/step2?transId='+timeStamp);
            }else{
                this.form()
            }
            
        };

    }
);