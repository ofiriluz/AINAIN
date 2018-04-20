SERVER_IP = 'localhost'
SERVER_PORT = 3000
SERVER_ADDRESS = 'http://' + SERVER_IP + ':' + SERVER_PORT;

angular.module('AINAIN.factories.secrets')
    .factory('SecretsFactory', ['$http', function($http){
        return {
            getPassphrase: function() {
                return $http.get(SERVER_ADDRESS + '/secrets/passPhrase');
            }
        }
    }]);