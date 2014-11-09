angular.module('appTopUp'
    ).controller('quantityController', 
        function($sessionStorage, $routeParams){
            this.storage = $sessionStorage;
            this.mobile = this.storage[$routeParams['transId']];
        });