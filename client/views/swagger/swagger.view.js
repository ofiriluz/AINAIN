angular.module('AINAIN.views.swagger')
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/swagger', {
        templateUrl: 'views/swagger/swagger.view.html',
        controller: 'SwaggerController'
    })
}])
.controller("SwaggerController", ['$scope',
    function($scope) {
    
}]);