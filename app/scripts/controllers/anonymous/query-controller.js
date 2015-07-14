/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('appTopUp'
    ).controller('queryController', 
        ['$sessionStorage', '$location', '$routeParams',
            function($sessionStorage, $location, $routeParams) {
                
                this.storage = $sessionStorage;
                
                var transId = $routeParams.transId;
                
                
                this.form = {
                    validation : ''
                };
                
                if(transId){
                    
                    var sessionPhone = this.storage[transId];
                    
                    if(sessionPhone){
                        
                        this.mobile = sessionPhone;
                    }else{
                        
                        this.mobile = {
                            number: ''
                        };
                    }
                    
                }else{
                    this.mobile = {
                        number: ''
                    };
                }

                this.submit = function() {
                    var timeStamp = new Date().getTime();
                    this.storage[timeStamp] = this.mobile;
                    $location.url('/anonymous/step2?transId='+timeStamp);

                };

            }
        ]);
