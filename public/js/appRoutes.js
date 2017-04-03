// public/js/appRoutes.js

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    //home.page

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        })

        .otherwise({
            templateUrl: 'views/home.html',
            controller: 'MainController'
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);

