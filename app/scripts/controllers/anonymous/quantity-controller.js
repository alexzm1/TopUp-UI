angular.module('appTopUp'
    ).controller('QuantityController', 
        ['$sessionStorage', '$routeParams', 'mobileQueryResponse',
            function($sessionStorage, $routeParams, mobileQueryResponse, $routeScope){
                this.storage = $sessionStorage;
                this.mobile = this.storage[$routeParams.transId];
                this.queryResponse = mobileQueryResponse;
                this.payment = {
                    amount: 5,
                    number : '',
                    expirationMonth : 12,
                    expirationYear : new Date().getFullYear(),
                    ccv : ''
                };
                
                this.submit = function (){
                    angular.noop();
                }
            }
        ]);
