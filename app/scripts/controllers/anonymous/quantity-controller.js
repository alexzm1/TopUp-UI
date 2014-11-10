angular.module('appTopUp'
    ).controller('quantityController', 
        ['$sessionStorage', '$routeParams', 'mobileQueryResponse',
            function($sessionStorage, $routeParams, mobileQueryResponse){
                this.storage = $sessionStorage;
                this.mobile = this.storage[$routeParams.transId];
                this.queryResponse = mobileQueryResponse;
                this.form = {
                    validation : ''
                };
                
                this.submit = function (){
                    this.mobile.validations = 'Not implemented yet!';
                }
            }
        ]);
