/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('appTopUp', ['anonymousServices', 'ngRoute', 'ngStorage']
        ).config(['$routeProvider', 
            function($routeProvider){
                'use strict';
                $routeProvider.when('/',{
                    redirectTo:'/anonymous/step1'
                }).when('/anonymous/step1', {
                    templateUrl: 'views/anonymous/mobile-number-form.html',
                    controllerAs: 'main',
                    controller: 'queryController'
                }).when('/anonymous/step2', {
                    templateUrl: 'views/anonymous/topup-quantity-form.html',
                    controllerAs: 'main',
                    controller: 'quantityController',
                    resolve : {
                        mobileQueryResponse : function(anonymousTopUpService){
                            anonymousTopUpService.queryMobileNumber();
                        }
                    }
                }).otherwise({
                    templateUrl: '404.html'
                });
            }]);