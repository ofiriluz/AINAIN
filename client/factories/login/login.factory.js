SERVER_IP = 'localhost'
SERVER_PORT = 3000
SERVER_ADDRESS = 'http://' + SERVER_IP + ':' + SERVER_PORT;

angular.module('AINAIN.factories.login')
    .factory('LoginFactory', ['$http', function($http){
        var loginState = "OFFLINE";
        return {
            performLogin: function(username, password) {
                return $http.post(SERVER_ADDRESS + '/control/login', {username: username, password: password});
            },
            setLoginState: function(state) {
                loginState = state;
            },
            getLoginState: function() {
                return loginState;
            }
        }
    }]);