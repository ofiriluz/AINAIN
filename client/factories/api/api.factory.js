SERVER_IP = 'localhost'
SERVER_PORT = 3000
SERVER_ADDRESS = 'http://' + SERVER_IP + ':' + SERVER_PORT;

angular.module('AINAIN.factories.api')
    .factory('APIFactory',['$http', function($http) {
        return {
            riddleMeThis: function(){
                return $http.get(SERVER_ADDRESS + '/api/riddleMeThis');
            },
            fireItUp: function(){
                return $http.get(SERVER_ADDRESS + '/api/fireItUp');
            }
        }
    }]);