/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('appTopUp'
    ).controller('queryController', 
        ['$sessionStorage', '$location', 
            function($sessionStorage, $location) {

                this.storage = $sessionStorage;

                this.form = {
                    validation : ''
                };

                this.mobile = {
                    number: ''
                };

                this.submit = function() {
                    var timeStamp = new Date().getTime();
                    this.storage[timeStamp] = this.mobile;
                    $location.url('/anonymous/step2?transId='+timeStamp);

                };

            }
        ]);
