/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('appTopUp', ['anonymousServices', 'ngRoute']
        ).config(['$routeProvider', function($routeProvider){
            $routeProvider.when('/',{
                redirectTo:'/anonymous/step1'
            }).when('/anonymous/step1', {
                templateUrl: 'templates/anonymous/mobile-number-form.html',
                controller: 'queryController'
            }).otherwise({
                templateUrl: '404.html'
            })
}]);