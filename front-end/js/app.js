var app = angular.module('ecommerce', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'mainTmpl.html'
//            controller: 'homeCtrl'.....this is from a previous example
            
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'adminTmpl.html'
        });
    
    $urlRouterProvider
        .otherwise('/');
    
});