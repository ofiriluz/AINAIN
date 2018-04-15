angular.module('AINAIN.views.api')
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/api', {
        templateUrl: 'views/api/api.html',
        controller: 'APIController'
    })
}])
.controller("APIController", ['$scope',
    function($scope) {

}]);