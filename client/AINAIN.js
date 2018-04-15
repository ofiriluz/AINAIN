angular.module('AINAIN', ['ngRoute',
    'AINAIN.views.login',
    'AINAIN.views.api'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        console.log("YO");
        // $locationProvider.hashPrefix('');
        $routeProvider.otherwise({redirectTo: '/login'});
        // $locationProvider.html5Mode({enabled: true, requireBase: false});
    }]);