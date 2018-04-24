angular.module('AINAIN.views.login')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'views/login/login.view.html',
            controller: 'LoginController'
        })
    }])
    .controller("LoginController", ['$scope', '$location', 'SecretsFactory', 'LoginFactory', 'APIFactory',
        function($scope, $location, SecretsFactory, LoginFactory, APIFactory) {
            $scope.username = '';
            $scope.password = '';
            $scope.isError = false;

            $scope.getPassphrase  = function() {
                return SecretsFactory.getPassphrase().then((passPhrase) => {
                    console.log("Passphrase = " + passPhrase.data.PHRASE);
                })
            }

            $scope.login = function() {
                LoginFactory.performLogin($scope.username, $scope.password).then(function(res){
                    if(res.data.result === "SUCCESS") {
                        LoginFactory.setLoginState('ACCEPTED');
                        $location.url('/swagger');
                    }
                    else {
                        $scope.isError = true;
                    }
                })
            }


            $.getScript("node_modules/particles.js/particles.js", function(){
                particlesJS('particles-js',
                    {
                        "particles": {
                            "number": {
                                "value": 200,
                                "density": {
                                    "enable": true,
                                    "value_area": 500
                                }
                            },
                            "color": {
                                "value": "#ffffff"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 8
                                },
                                "image": {
                                    "width": 100,
                                    "height": 100
                                }
                            },
                            "opacity": {
                                "value": 0.5,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 5,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 200,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 200,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 8,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 100
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true,
                        "config_demo": {
                            "hide_card": false,
                            "background_color": "#b61924",
                            "background_image": "",
                            "background_position": "50% 50%",
                            "background_repeat": "no-repeat",
                            "background_size": "cover"
                        }
                    }
                );

            });
        }
    ]);