angular.module('AINAIN', ['ngRoute',
    'AINAIN.views.login',
    'AINAIN.views.swagger',
    'AINAIN.factories.login'])
    .config(['$routeProvider', '$locationProvider', 'LoginFactoryProvider', function ($routeProvider, $locationProvider, LoginFactoryProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.otherwise({redirectTo: '/login'});
        // $locationProvider.html5Mode({enabled: true, requireBase: false});
    }])
    .run(['$rootScope','$location', '$timeout', 'LoginFactory',
            function ($rootScope, $location, $timeout, LoginFactory) {
                $rootScope.$on('$locationChangeStart', function (event, next, current) {
                    if(LoginFactory.getLoginState() === 'ACCEPTED') {
                        LoginFactory.setLoginState('LOGGED');
                    }
                    else if(LoginFactory.getLoginState() == 'LOGGED') {
                        event.preventDefault();
                    }
                });
            }
        ])
    
    