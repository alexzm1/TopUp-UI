angular.module('appTopUp'
    ).controller('quantityController', 
        ['$sessionStorage', '$routeParams', 'mobileQueryResponse',
            function($sessionStorage, $routeParams, mobileQueryResponse){
                this.storage = $sessionStorage;
                this.mobile = this.storage[$routeParams.transId];
                this.payment = {
                    amount: 5,
                    number : '',
                    expirationMonth : 12,
                    expirationYear : new Date().getFullYear(),
                    ccv : ''
                };
                this.queryResponse = mobileQueryResponse;
                this.form = {
                    validation : ''
                };
                
                this.submit = function (){
                    this.mobile.validations = 'Not implemented yet!';
                }
            }
        ]);
