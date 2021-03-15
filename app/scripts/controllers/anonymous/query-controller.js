/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('appTopUp'
    ).controller('queryController', 
        ['$routeParams', '$location', '$sessionStorage',
            function($routeParams, $location ,$sessionStorage) {
                
                this.form = {
                    validation : ''
                };

                this.mobile = {
                    number: ''
                };
                
                var transId = $routeParams.transId;
                if(transId){
                    var sessionPhone = $sessionStorage[transId];
                    if(sessionPhone){
                        this.mobile = sessionPhone;
                    }   
                }

                this.submit = function() {
                    var timeStamp = new Date().getTime();
                    $sessionStorage[timeStamp] = this.mobile;
                    $location.url('/anonymous/step2?transId='+timeStamp);

                };

            }
        ]);
