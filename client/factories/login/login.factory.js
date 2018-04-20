SERVER_IP = 'localhost'
SERVER_PORT = 3000
SERVER_ADDRESS = 'http://' + SERVER_IP + ':' + SERVER_PORT;

angular.module('AINAIN.factories.secrets')
    .factory('LoginFactory', ['$http', function($http){
        return {
            performLogin: function(username, password) {
                return $http.post(SERVER_ADDRESS + '/login', {username: username, password: password});
            }
        }
    }]);